import { useNavigate } from "react-router-dom";

const BusDetails2 = ({onNext}) => {
const navigate = useNavigate() ;
// const handlesubmit = (e) => {
// e.preventDefault() ;
//  onNext() ;
//  navigate('/drivers/profile') ;

// }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      startingTime: e.target.StartingTime.value,
      departureTime: e.target.DepartureTime.value,
      startPoint: e.target.StartingLocation.value,
      departurePoint : e.target.DepartureLocation.value,
      stops: e.target.stops.value,
    };
    onNext(data); 
     navigate('/drivers/profile') ;
  };

    return (
        <>
            <div className="bg-blue-100 w-full h-170">

                <div className="w-full container flex justify-center items-center">
                    <section >
                        <p className="text-3xl mb-8">Enter Details for your Bus</p>
                        <form onSubmit={handleSubmit} action="">
                            <div className="flex gap-8 mb-5">
                                <div className='grid gap-2 text-2xl'>
                                    <label htmlFor='StartingTime'>Starting Time Of Bus :</label>
                                    <input
                                        type='Time'
                                        id='StartingTime'
                                        autoFocus
                                        className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                        name='StartingTime'
                                        // value={}
                                        // onChange={handleChange}
                                        placeholder='Enter Bus Starting Time'
                                    />
                                </div>
                                <div className='grid gap-2 text-2xl'>
                                    <label htmlFor='DepartureTime'>Departure Time Of Bus  :</label>
                                    <input
                                        type='Time'
                                        id='DepartureTime'
                                        autoFocus
                                        className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                        name='DepartureTime'
                                        // value={}
                                        // onChange={handleChange}
                                        placeholder='Enter Bus Departure Time'
                                    />
                                </div>
                            </div>
                            <div className="flex gap-8 mb-5">
                                <div className='grid gap-2 text-2xl'>
                                    <label htmlFor='StartingLocation'>Starting Location Of Bus :</label>
                                    <input
                                        type='text'
                                        id='Starting Location'
                                        autoFocus
                                        className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                        name='StartingLocation'
                                        // value={}
                                        // onChange={handleChange}
                                        placeholder='Enter Bus Starting Location'
                                    />
                                </div>
                                    <div className='grid gap-2 text-2xl'>
                                        <label htmlFor='DepartureLocation'>Departure Location Of Bus  :</label>
                                        <input
                                            type='text'
                                            id='DepartureLocation'
                                            autoFocus
                                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                            name='DepartureLocation'
                                            // value={}
                                            // onChange={handleChange}
                                            placeholder='Enter Bus Departure Location'
                                        />
                                    </div>
                            </div>
                            <div className='grid gap-2 text-2xl'>
                                <label htmlFor='name'>InterMediate Locations :</label>
                                <input
                                    type='text'
                                    id='stops'
                                    autoFocus
                                    className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                    name='stops'
                                    // value={}
                                    // onChange={handleChange}
                                    placeholder='Enter InterMediate Bus Stops'
                                />
                            </div>
                              <button type="submit"  className="bg-green-800 hover:bg-green-700  text-white py-2 rounded font-semibold mt-7 p-5 w-full tracking-wide cursor-pointer">Save And Continue </button>
                        </form>
                    </section>
                </div>

            </div>




        </>
    )
}
export default BusDetails2;