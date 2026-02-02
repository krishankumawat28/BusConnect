const BusDetails1 = ({onNext}) => {

    const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Ownername: e.target.Ownername.value,
      numbers: e.target.numbers.value,
      mobile: e.target.mobile.value,
    };
    onNext(data); // parent ko bhej rhe yahan se
  };

    return (
        <>
            <div className="bg-blue-100 w-full h-170">
              
                <div className="w-full container flex justify-center items-center">
                    <section >
                        <p className="text-3xl">Enter Details for your Bus</p>
                        <form onSubmit={handleSubmit} className='grid gap-4 mt-15' action="">
                            <div className='grid gap-2 text-2xl'>
                                <label htmlFor='name'>Owners Name :</label>
                                <input
                                    type='text'
                                    id='Ownername'
                                    autoFocus
                                    className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                    name='Ownername'
                                    // value={}
                                    // onChange={handleChange}
                                    placeholder='Enter Owners name'
                                />
                            </div>
                             <div className='grid gap-2 text-2xl'>
                                <label htmlFor='name'>Bus Number :</label>
                                <input
                                    type='text'
                                    id='numbers'
                                    autoFocus
                                    className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                    name='numbers'
                                    // value={}
                                    // onChange={handleChange}
                                    placeholder='Enter Bus Number'
                                />
                            </div>
                              <div className='grid gap-2 text-2xl'>
                                <label htmlFor='name'>Mobile No :</label>
                                <input
                                    type='number'
                                    id='mobile'
                                    autoFocus
                                    className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                                    name='mobile'
                                    // value={}
                                    // onChange={handleChange}
                                    placeholder='Enter Mobile Number'
                                />
                            </div>
                              <button type="submit"  className="bg-green-800 hover:bg-green-700  text-white py-2 rounded font-semibold my-3 tracking-wide cursor-pointer">Save And Continue </button>
                        </form>
                    </section>
                </div>

            </div>




        </>
    )
}
export default BusDetails1 ;