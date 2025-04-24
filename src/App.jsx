import {  Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import MobileNavigation from "./components/MobileNavigation";
import CustomToaster from "./components/CustomToaster";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL } from "./store/movieoSlice";
import { Axios } from "./axios/Axios";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import './App.css'

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async()=>{
      await Axios.get('/trending/all/week').then((res)=>dispatch(setBannerData(res.data.results))).catch((error)=>toast.error("Failed to fetch data"))
  }

  const fetchConfiguration = async()=>{
      await Axios.get('/configuration').then((res)=>dispatch(setImageURL(res.data.images.secure_base_url+"original"))).catch((error)=>toast.error("Failed to fetch data"))
  }

  useEffect(() => {
    fetchTrendingData(); 
    fetchConfiguration();
  }, []);
  return (
  <>
  <CustomToaster />
  
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="">
         <Outlet />
        </div> 
        <Footer />
        <MobileNavigation />
      </main>
      </>
  );
}

export default App;
