import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({data,trending,index}) {
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  return (
    <Link
     to={"/"+data?.media_type+"/"+data?.id} 
     className='w-full min-w-[230px] max-w-[230px] rounded h-80 relative transform transition-transform duration-300 hover:scale-105'>
      <img src={imageURL+data?.poster_path} alt="Img Movie" />
      <div className='absolute top-4 '>
      {
        trending && (
          <div className='font-bold px-4 py-1 rounded-r-full backdrop-blur-3xl bg-black/60 overflow-hidden'>
            #{index} Trending
          </div>
        )
      }
      </div>
      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
        <h2 className='font-semibold text-ellipsis line-clamp-1 text-lg '>{data?.title || data?.name}</h2>
        <div className='text-sm text-neutral-400 flex justify-between items-center'>
          <p>{moment(data?.release_date).format("MMMM Do YYYY")}</p>
          <p className='bg-black px-1 rounded-full text-xs font-semibold text-white'>Rating: {Number(data?.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card