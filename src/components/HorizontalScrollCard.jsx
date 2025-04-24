import React, { useRef } from 'react'
import Card from '../components/Card';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa6'

function HorizontalScrollCard({data = [],heading,trending}) {
    const containerRef = useRef()
    
    const HandleNext = ()=>{
        containerRef.current.scrollLeft += 300
    }

    const HandlePrev = ()=>{
            containerRef.current.scrollLeft -= 300;
    }

  return (
    <div className='container mx-auto px-3 my-10'>
    <h1 className='text-xl font-bold lg:text-2xl text-white mb-3 '>{heading}</h1>
    <div className='relative'>
    <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-none'>
        {
        data.map((data,index) => {
        return (
            <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending} />
        );
        })
        }
        </div>
        { data.length >  0 &&
        <div className='absolute top-0 w-full h-full hidden lg:flex justify-between items-center '>
            <button onClick={HandlePrev} className='bg-white p-1 text-black rounded-full -ml-2 z-10'><FaAngleLeft/></button>
            <button onClick={HandleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'><FaAngleRight/></button>
        </div>
        }
    </div>
  </div>
  )
}

export default HorizontalScrollCard