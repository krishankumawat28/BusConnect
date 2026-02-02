import BusModel from '../models/BusModel.js';


async function getCoordinates(cityName) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}`;
    const response = await fetch(url, { headers: { "User-Agent": "BusConnect-app" } });
    const data = await response.json();
    if (data.length > 0) {
        return {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon)
        };
    }
    return { lat: null, lng: null };
}

export async function registerBusController(request, response) {
    try {
        const { Ownername, numbers, mobile, startPoint, departurePoint, startingTime, departureTime, stops } = request.body;

        if (!Ownername || !numbers || !mobile) {
            return response.status(400).json({
                message: "provide Ownername or numbers or mobile",
                error: true,
                success: false
            });
        }

        const user = await BusModel.findOne({ numbers });
        if (user) {
            return response.status(400).json({
                message: "already registered bus",
                error: true,
                success: false
            });
        }

        // geocoding startPoint & departurePoint
        let startCoords = { lat: null, lng: null };
        let depCoords = { lat: null, lng: null };

        if (startPoint) {
            startCoords = await getCoordinates(startPoint);
        }
        if (departurePoint) {
            depCoords = await getCoordinates(departurePoint);
        }

        const payload = {
            Ownername,
            numbers,
            mobile,
            startPoint,
            startLat: startCoords.lat,
            startLng: startCoords.lng,
            departurePoint,
            departureLat: depCoords.lat,
            departureLng: depCoords.lng,
            startingTime,
            departureTime,
            stops
        };

        const newBus = new BusModel(payload);
        const save = await newBus.save();

        return response.json({
            message: "Bus details saved successfully",
            error: false,
            success: true,
            data: save
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export async function getBusRouteController(request, response) {
    try {
        const { numbers } = request.params;

        //    console.log(numbers);
        const bus = await BusModel.findOne({ numbers });
        if (!bus) {
            return response.status(404).json({
                message: "Bus not found",
                error: true,
                success: false
            });
        }

        // Check coords
        if (!bus.startLat || !bus.startLng || !bus.departureLat || !bus.departureLng) {
            return response.status(400).json({
                message: "Bus coordinates not available",
                error: true,
                success: false
            });
        }

        // ORS API call
        const apiKey = process.env.ORS_API_KEY;
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${bus.startLng},${bus.startLat}&end=${bus.departureLng},${bus.departureLat}`;

        //    console.log(url);
        const orsRes = await fetch(url);
        //   console.log(orsRes);
        const data = await orsRes.json();
        // console.log("data is : ", data);

        // polyline decode hoke coordinates me hota hai
        let coords = [];

        if (data.features && data.features.length > 0) {
            coords = data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        }

        if (coords.length === 0) {
            return response.status(400).json({
                message: "Route not found",
                error: true,
                success: false
            });
        }
        return response.json({
            message: "Route fetched successfully",
            error: false,
            success: true,
            route: coords
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

export async function getCitiesController(req, res) {
    try {
        const search = req.query.search;
        const apiresponse = await fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=IN&namePrefix=${search}&minPopulation=0`,
            {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
                    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
                },
            }
        );
        const data = await apiresponse.json();
        res.json(data);  
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch cities" });
    }
}
