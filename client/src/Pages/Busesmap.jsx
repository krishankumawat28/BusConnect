import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup,Polyline, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';


function FitBounds({ route }) {
  const map = useMap();
  useEffect(() => {
    if (route.length > 0) {
      map.fitBounds(route);
    }
  }, [route, map]);
  return null;
}


export default function Busesmap() {
    const [route, setRoute] = useState([]);
      const bus = useSelector((state)=>state.bus) ;
 

  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_API_URL}api/bus/${bus.numbers}/route`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setRoute(data.route);
      });
  }, [bus.numbers]);

  return (
   <div className="flex justify-center items-center h-200px border-amber-200">
      <MapContainer center={route[0]} zoom={13} style={{ height: "500px", width: "50%",border:"yellow" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {route.length > 0 && (
          <>
            <Polyline positions={route} color="blue" />
            <Marker position={route[0]}  color="blue">
              <Popup>Start Location</Popup>
            </Marker>
            <Marker position={route[route.length - 1]} color="yellow">
              <Popup>End Location</Popup>
            </Marker>
            <FitBounds route={route} />
          </>
        )}
      </MapContainer>
    </div>
  );
}
