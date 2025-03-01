import {useSelector} from 'react-redux'

function BannerHome() {
const bannerData= useSelector(state=>state.movieoData.bannerData)

const imageURL= useSelector(state=>state.movieoData.imageURL)

  return (
    <section className="w-full h-full">
    	<div className="flex min-h-full max-h-[95vh]">
    		{
    			bannerData.map((data,index)=>{
    				return(
    					<div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative">
    						<div className="w-full h-full">
    							<img src={imageURL+data.backdrop_path} className="w-full h-full object-cover" />
    						</div>
    						
    						<div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transpaent"></div>
    					</div>
    				)
    			})
    		}
    	</div>
    </section>
  )
}

export default BannerHome
