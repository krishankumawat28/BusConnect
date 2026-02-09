
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import Axios from '../utils/Axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AxiosToastError from '../utils/AxiosToastError';
import { useDispatch } from 'react-redux';
import fetchUserDetails from '../utils/FetchUserDetails'
import { setUserDetails } from '../store/userSlice';
//import SummaryApi from '../Common/SummaryApi';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value,
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/api/user/login',
                data,
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
                localStorage.setItem('accesstoken', response.data.data.accesstoken)
                localStorage.setItem('refreshToken', response.data.data.refreshToken)
                const userDetails = await fetchUserDetails()
                console.log(userDetails);
                dispatch(setUserDetails(userDetails.data))

                setData({ email: "", password: "" });
                navigate("/driver");
            }
        } catch (error) {
            console.error("Axios login error : ", error);
            AxiosToastError(error);
        }
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-blue-200 my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p className='text-2xl'>Login To Your Account</p>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            // value={data.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                className='w-full outline-none'

                                //  value={data.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                            />
                        </div>
                        <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>Forgot password ?</Link>
                    </div>

                    <button className="bg-green-800 hover:bg-green-700 text-white py-2 rounded font-semibold my-3 tracking-wide">Login</button>

                </form>
                <div className='flex gap-30'>
                    <p>
                        Do not have account? <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800'>Register</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='font-semibold text-green-700 hover:text-green-800'>Go to Home</Link>
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Login