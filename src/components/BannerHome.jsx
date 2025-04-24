import {useSelector} from 'react-redux'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa6'
import {useState,useEffect} from 'react'

function BannerHome() {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const [currentImg, setCurrentImg] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(null);

  const handleNext = () => {
    if (currentImg < bannerData.length - 1) {
      setCurrentImg((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImg > 0) {
      setCurrentImg((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImg < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImg(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentImg]);

  const handleMouseMove = (e) => {
    const screenWidth = window.innerWidth;
    const mouseX = e.clientX;

    if (mouseX < screenWidth * 0.4) {
      setHoverPosition("left");
    } else if (mouseX > screenWidth * 0.6) {
      setHoverPosition("right");
    } else {
      setHoverPosition(null);
    }
  };
  return (
    <section className="w-full h-full" onMouseMove={handleMouseMove}>
    	<div className="flex min-h-full max-h-[95vh] overflow-hidden">
    		{
    			bannerData.map((data,index)=>{
    				return(
    					<div key={index} className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all ease-out" style={{transform:`translateX(-${currentImg * 100}%)`}}>
    						<div className="w-full h-full">
    							<img src={imageURL+data.backdrop_path} className="w-full h-full object-cover" />
    						</div>
    						
    						{/*	button < and > img */}
    						<div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex transition-all duration-300 ease-in-out">
    							<button onClick={handlePrev}  className={`absolute left-4 p-2 rounded-full text-lg z-10 text-black transition-all ease-in-out ${
                  currentImg === 0 ? "bg-gray-400" : "bg-white"
                } ${hoverPosition === "left" ? "flex" : "hidden"}`}
                 disabled={currentImg === 0}>
    								<FaAngleLeft />
    							</button>
    							<button onClick={handleNext}   className={`absolute right-4 p-2 rounded-full text-lg z-10 text-black transition-all ease-in-out ${
                  currentImg === bannerData.length - 1 ? "bg-gray-400" : "bg-white"
                } ${hoverPosition === "right" ? "flex" : "hidden"}`} 
                                disabled={currentImg === bannerData.length - 1}
>
    								<FaAngleRight />
    							</button>
    						</div>
    						
    						<div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transpaent"></div>
    						<div className="container mx-auto" ><div className="w-full absolute bottom-0 max-w-md px-3">
    						<h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{data?.title || data?.name}</h2>
    						<p className="text-ellipsis line-clamp-3 my-2">{data.overview}</p>
    						
    							<div className="flex items-center gap-4">
    								<p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
    								<span>|</span>
    								<p>View : {Number(data.popularity).toFixed(0)}</p>
    							</div>
    							<button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 mb-2  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all  ease hover:scale-105 ">Play Now</button>
    						</div>
    						</div>
    						
    					</div>
    				)
    			})
    		}
    	</div>
    </section>
  )
}

export default BannerHome
