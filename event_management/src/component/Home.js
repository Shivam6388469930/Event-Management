import React from 'react';
import Hero from './Hero';



const Home = () => {
  return (
    <>
     
        <Hero />
   
      <div className=' felx justify-center'>
        <p className='text-red-400 font-bold text-2xl'>Welcome</p>
        <p>eventKiya Is A professionally Managed Event</p>
      </div>
      <div className="lg:col-span-3">

        <div className="container">
          <div className=" flex flex-wrap mb-2 justify-center">
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Birthday</div>
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Sangeet</div>
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Weddings</div>
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Photography</div>
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Catering</div>
            <div className='w-72 h-16 border-r-gray-400 border-2 border-solid border-b-gray-400 flex justify-center items-center m-6 text-red-500 font-semibold'>Promotions</div>
</div>

        </div>
        </div>
      </>

      )
}

      export default Home
