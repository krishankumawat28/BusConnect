import { useNavigate } from "react-router-dom";

const DriverProfile = () => {
const navigate = useNavigate() ;
const handlemap=()=>{
    navigate("/drivers/busesmap") ;
}

    return (
    <>
    <div className="bg-blue-100 w-full h-170">
               
                <div className=" container w-fit mx-auto justify-center items-center gap-5  text-3xl">
                    <h1 className="">Hii, krishan</h1>
            <button onClick={handlemap} className="bg-green-300 p-5 cursor-pointer rounded-2xl mt-15 ml- hover:bg-green-400">Track Buses On Your Root</button>
                </div>

            </div>

    </>
)

}

export default DriverProfile;