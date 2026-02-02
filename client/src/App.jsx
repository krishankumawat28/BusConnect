
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
 
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
