import React from 'react';
import { useNavigate } from 'react-router-dom';


const ArtistCard = ({track}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)} className='flex flex-col w-[250px] p-4 bg-opacity-80 bg-white/5 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <img className='w-full rounded-lg h-56' src={track?.images?.coverart} alt='artistimg' />
      <p className='font-semibold mt-4 text-lg text-white truncate'>{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard