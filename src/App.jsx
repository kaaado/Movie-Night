import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNavigation from "./components/MobileNavigation"
import { useEffect } from "react"
import { Axios } from "./axios/Axios"

function App() {  
  const fetchTrendingData=async()=>{
    try {
      await Axios.get('/trending/all/week').then(res=>console.log(res))
    } catch (error) {
      console.log('error ',error)
    }
    
  }
  useEffect(()=>{
    fetchTrendingData()
  },[])
  return (
    <main className="pb-14 lg:pb-0">
        <Header/>
        <div className="pt-16">
          <Outlet/>
        </div>
        <Footer/>
        <MobileNavigation/>
    </main>
  )
}

export default App
