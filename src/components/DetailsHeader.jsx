import React from 'react';
import {Link} from 'react-router-dom';


const DetailsHeader = ({artistId , artistData , songData}) => {
  return (
    <div className='relative w-full h-96'>
      <div className='w-full bg-gradient-to-l from-transparent to-black h-28 sm:h-48' />
      <div className='absolute top-0 inset-0 flex items-center'>
        <img className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black' src={artistId ? artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}' , '500').replace('{h}' , '500') : songData?.images?.coverart } alt="art" />
      </div>
    </div>
  )
}

export default DetailsHeader