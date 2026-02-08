import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Passanger from "../Pages/Passanger";
import Driver from "../Pages/Driver";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import DriverProfile from "../Pages/DriverProfile";
import BusesMap from "../Pages/Busesmap";
import BusRegisters1 from "../Pages/BusRegisters1";
import BusRegisters2 from "../Pages/BusRegisters2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "passangers",
                element: <Passanger />,
            },
            {
                path: "driver",
                element: <Driver />,
                children: [
                    {
                        path: "BusRegisters1",
                        element: <BusRegisters1 />,
                    },
                    {
                        path: "BusRegisters2",
                        element: <BusRegisters2 />,
                    },
                    {
                        path: "profile",
                        element: <DriverProfile />,
                    },
                    {
                        path: "busesmap",
                        element: <BusesMap />,
                    }
                ]
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            }
        ]
    }
])
export default router;