import React from 'react';
import {Link} from 'react-router-dom';


const DetailsHeader = ({artistId , artistData , songData}) => {
    console.log(artistData)
    const artist = artistData?.artists[artistId].attributes;
    console.log(artist);
  return (
    <div className='w-full h-48 mb-1'>
      <div className='relative w-full bg-gradient-to-l from-transparent to-black h-28 sm:h-48'>
        <div className='absolute top-0 inset-0 flex items-center'>
        <img className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black' src={artistId ? artist?.artwork?.url.replace('{w}' , '500').replace('{h}' , '500') : songData?.images?.coverart } alt="art" />
        <div className='ml-5'>
          <p className='text-white text-xl font-bold sm:text-3xl'>{artistId ? artist?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='text-base text-gray-400 mt-2'>{songData?.subtitle}</p>
            </Link>
          )}
          <p className='text-base text-gray-400 mt-2'>
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      
      
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader;