import { useNavigate } from "react-router-dom";



const Home = () =>{
    const Navigate = useNavigate() ;
    return(
        <>
<header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-4xl font-bold">BusConnect</h1>
    <nav>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md mr-4 hover:bg-blue-100 cursor-pointer" onClick={() => Navigate("/login")}>Login</button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 cursor-pointer" onClick={() => Navigate("/register")}>Register</button>
    </nav>
</header>
<main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
    <div className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to BusConnect!</div>
    <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
        Your ultimate solution for seamless bus tracking and management.
        Whether you are a passenger looking for real-time bus locations or a driver managing routes,
        BusConnect makes your journey easier and more efficient.
    </p>
    <div className="flex justify-center items-center gap-10">
        <div className="cursor-pointer bg-white shadow-lg rounded-xl p-6 hover:bg-green-100 transition-all duration-300 transform hover:scale-105 text-3xl font-semibold text-green-700">
            <button className="cursor-pointer" onClick={() => Navigate("/passangers")}>Passenger</button>
        </div>
        <div className="cursor-pointer bg-white shadow-lg rounded-xl p-6 hover:bg-green-100 transition-all duration-300 transform hover:scale-105 text-3xl font-semibold text-green-700">
            <button className="cursor-pointer" onClick={() => Navigate("/drivers")}>Driver</button>
        </div>
    </div>
</main>

       
        </>
    )

}
export default Home ;