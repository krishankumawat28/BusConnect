
import { Link } from 'react-router-dom';


const Login = () => {
 
    
    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-blue-200 my-4 w-full max-w-lg mx-auto rounded p-7'>
            <p className='text-2xl'>Login To Your Account</p>
                <form className='grid gap-4 py-4' >
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            // value={data.email}
                            // onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type="password"
                                id='password'
                                className='w-full outline-none'
                                name='password'
                                // value={data.password}
                                // onChange={handleChange}
                                placeholder='Enter your password'
                            />
                            {/* <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
                                {
                                    showPassword ? (
                                        <FaRegEye />
                                    ) : (
                                        <FaRegEyeSlash />
                                    )
                                }
                            </div> */}
                        </div>
                        <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>Forgot password ?</Link>
                    </div>
    
                    <button className="bg-green-800 hover:bg-green-700 text-white py-2 rounded font-semibold my-3 tracking-wide">Login</button>

                </form>

                <p>
                    Do not have account? <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800'>Register</Link>
                </p>
            </div>
        </section>
    )
}

export default Login