import { useState } from 'react'
import BusDetails1 from "../Components/BusDetails1";
import BusDetails2 from "../Components/BusDetails2";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate,Outlet } from 'react-router-dom';
import axios from 'axios'
import { setBusDetails } from '../store/BusSlice';

const Driver = () => {
    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;
    const [step, setStep] = useState(1);
    const [formData,setFormData] = useState({}) ;
    const handleNext = (data) =>{
        setFormData(prev=>({...prev,...data})) ;
        setStep(step+1) ;
    }

    const  handleFinalSubmit = async (data) => {
       // const allData = {...formData,...data} ;
         const allData = {
                    Ownername: formData.Ownername,
                    numbers: formData.numbers,
                    mobile: formData.mobile,
                    startingTime: data.startingTime,
                    departureTime: data.departureTime,
                    startPoint: data.startPoint,
                    departurePoint: data.departurePoint,
                    stops: data.stops,
  };
        console.log("all data",allData);
       try {
     const response =  await axios.post("http://localhost:8080/api/bus/busregister", allData);
       dispatch(setBusDetails(allData)) ;
      alert("Details saved successfully!");
      setStep(3) ;
      if(response.success){
      
        navigate("profile") ;
      }
      
    } catch (error) {
       console.error(error.response?.data || error.message);
      alert("Error saving details");
    }
  };

    return (
        <>
            <div className="bg-blue-100 w-full h-170">
                <h1 className="text-2xl ml-3">BusConnect</h1>
                <div className="w-full container flex justify-center items-center">
                    {
                        step == 1 && <BusDetails1 onNext={handleNext} />

                    }
                    {
                        step == 2 && <BusDetails2 onNext={handleFinalSubmit}/>
                    }



                </div>
                <div>
                    <Outlet />
                </div>
            </div>



        </>

    )
}
export default Driver;