import {Link} from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from 'react';
// import Axios from '../utils/Axios';
// import SummaryApi from '../Common/SummaryApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AxiosToastError from '../utils/AxiosToastError';
import axios from 'axios';

const Register = () =>{
    const navigate = useNavigate() ;
    const [data,setData] = useState({
        name : "" ,
        email : "",
        password : "" ,
    })
const [showPassword, setShowPassword] = useState(false) ;
//const [showConfirmPassword,setShowConfirmPassword] = useState(false) ;
const handleChange = (e) => {
    const {name,value} = e.target ;

setData((preve)=>{
        return {
            ...preve ,
            [name] : value ,
        }
    })
}

// const handleSubmit = async(e) =>{
//     e.preventDefault() ;
//   //  console.log("registerd success") ;
//     try {
//         // const response = await Axios({
//         //     ...SummaryApi.register ,
//         //     data : data 
//         // })
//       //  console.log("Sending data to backend:", data);

//         const response = await Axios.post('/api/user/register', data);


//         if(response.data.error){
//             toast.error(response.data.message)
//         }
//         if(response.data.success){
//             toast.success(response.data.message)
//              setData({
//                     name : "",
//                     email : "",
//                     password : ""
//                 })
//                 navigate("/login")
//         }
//     } catch (error) {
//         AxiosToastError(error) 
//     }
// }
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Sending data:");

  try {
    const response = await axios.post(
      'http://localhost:8080/api/user/register',
      data  ,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    );

    console.log("Response:", response.data);

    if (response.data.error) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
      setData({ name: "", email: "", password: "" });
      navigate("/login");
    }
  } catch (error) {
    console.error("Axios error:", error);
    AxiosToastError(error);
  }
};

    return(
        <section className='w-full container mx-auto px-2'>
            <div className='bg-blue-200 my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p className='text-2xl'>Welcome to BusConnect</p>

                <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='name'>Name :</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            autoFocus
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            value={data.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                name='password'
                                className='w-full outline-none'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                            />
                            <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
                                {
                                    showPassword ? (
                                        <FaRegEye />
                                    ) : (
                                        <FaRegEyeSlash />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <button type='submit' className="bg-green-800 hover:bg-green-700 text-white py-2 rounded font-semibold my-3 tracking-wide cursor-pointer" >Register</button>

                </form>

                <p>
                    Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link>
                </p>
            </div>
        </section>
    )
}
export default Register ;