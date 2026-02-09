
import { Outlet } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import setUserDetails from './store/UserSlice'
import fetchUserDetails from './utils/FetchUserDetails'
import { useEffect } from 'react'

function App() {
 const dispatch = useDispatch()
  

  const fetchUser = async()=>{
      const userData = await fetchUserDetails()
    //  console.log(userData) ;
      dispatch(setUserDetails(userData.data))
  }

    useEffect(()=>{
    fetchUser()
  },[])

  return (
    <>
    <div>
   <main className='w-full h-full'>
<Outlet/>
   </main>
    </div>

    
    </>
  )
}

export default App
