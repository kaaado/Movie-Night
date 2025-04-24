import { useSelector } from 'react-redux';
import BannerHome from '../components/BannerHome';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';


function Home() {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const {data: nowPlayingData, loading: loadingNowPlaying} = useFetch('/movie/now_playing');
  const {data: topRatedMovie, loading: loadingTopRatedMovie} = useFetch('/movie/top_rated');
  const {data: popularMovie, loading: loadingPopularMovie} = useFetch('/movie/popular');
  const {data: AiringTV, loading: loadingAiringTV} = useFetch('/tv/airing_today');
  const {data: topRatedTv, loading: loadingTopRatedTv} = useFetch('/tv/top_rated');
  const {data: popularTv, loading: loadingPopularTv} = useFetch('/tv/popular');
  

  const isLoading = loadingNowPlaying || loadingTopRatedMovie || loadingPopularMovie || loadingAiringTV || loadingTopRatedTv || loadingPopularTv;

  return (
    <div>
    <BannerHome/>
    {isLoading ? (
     <Loading />
     ) : (
      <> 
        {trendingData  &&
        <HorizontalScrollCard heading="Trending" data={trendingData} trending/>
        }
        {nowPlayingData  && 
          <HorizontalScrollCard heading="Now Playing" data={nowPlayingData} /> 
        }
        {topRatedMovie  && 
          <HorizontalScrollCard heading="Top Rated Movie" data={topRatedMovie} /> 
        }
        {popularMovie  && 
          <HorizontalScrollCard heading="Popular Movie" data={popularMovie} /> 
        }
        {AiringTV  && 
          <HorizontalScrollCard heading="Airing TV Show" data={AiringTV} /> 
        }
        {topRatedTv  && 
          <HorizontalScrollCard heading="Top Rated TV Show" data={topRatedTv} /> 
        }
        {popularTv  && 
          <HorizontalScrollCard heading="Popular TV Show" data={popularTv} /> 
        }
     </>
  )}
    </div>
  )
}

export default Home
