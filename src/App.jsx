import {  Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import MobileNavigation from "./components/MobileNavigation";
import CustomToaster from "./components/CustomToaster";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieoSlice";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "./axios/Axios";
import { useEffect } from "react";
import toast from 'react-hot-toast';



const fetchTrendingData = async () => {
  const { data } = await Axios.get("/trending/all/week");
  return data.results;
};

function App() {
  const dispatch = useDispatch();

  
  const { data, error, isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingData,
  });

  
  useEffect(() => {
    if (data) {
      dispatch(setBannerData(data));
    }
  }, [data, dispatch]);

  if (error){
    toast.error('Failed for fetching data');
    window.location.reload();
  }


  return (
  <>
  <CustomToaster />
    {isLoading ? <Loading/> :
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="pt-16">
         <Outlet />
        </div> 
        <Footer />
        <MobileNavigation />
      </main>}
      </>
  );
}

export default App;
