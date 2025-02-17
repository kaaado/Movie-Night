import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNavigation from "./components/MobileNavigation"
import { useEffect } from "react"
import { Axios } from "./axios/Axios"
import { useDispatch } from "react-redux"
import { setBannerData } from "./store/movieoSlice"

function App() {  
  const dispatch = useDispatch()

  const fetchTrendingData=async()=>{
    try {
      await Axios.get('/trending/all/week')
      .then(res=>{
        dispatch(setBannerData);
        console.log(res.data.results)
      })
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
