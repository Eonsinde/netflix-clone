import React from 'react'
import axios from '../axios'
import requests from '../requests';


export default function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
      ]);

      return request;
    }

    fetchData();
  }, []);

  const truncate = (pString, n) => {
    return pString?.length > n ? pString.substring(0, n-1) + '...' : pString;
  }

  return (
    <header 
      className='bg-neutral-900 relative h-[600px] flex flex-col justify-end gap-y-10 object-contain text-white'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      <div className='flex flex-col space-y-6 px-3 md:px-8'>
          <h1 className='text-2xl md:text-5xl font-semibold'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className='flex space-x-4'>
              <button className='bg-neutral-800 border-none text-white text-[1rem] outline-none border-r-2 py-[0.2rem] md:py-[0.5rem] px-[1rem] md:px-[2rem] hover:bg-white hover:text-[#000] transition-all ease-in'>Play</button>
              <button className='bg-neutral-800 border-none text-white text-[1rem] outline-none border-r-2 py-[0.2rem] md:py-[0.5rem] px-[1rem] md:px-[2rem] hover:bg-white hover:text-[#000] transition-all ease-in'>My List</button>
          </div>
          <p className='w-full md:w-[30rem] leading-5 text-[1.1rem] lg:text-[1.2rem]'>
            {truncate(movie?.overview, 150)}
          </p>
      </div>

      <div className='h-[7.4rem] bg-gradient-to-b from-transparent to-app-dark' />
    </header>
  )
}
