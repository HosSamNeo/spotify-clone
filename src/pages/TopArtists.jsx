import React from 'react';
import { useSelector } from 'react-redux';
import { ArtistCard , Loader , Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';


const TopArtists = () => {

    const {data , isFetching , error} = useGetTopChartsQuery();

    


    if(isFetching) return <Loader title='loading songs around you' />
    if(error) return <Error />

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mb-10 mt-4'>
                Top Artists
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track) => <ArtistCard 
                    key={track.key}
                    track={track}
                />)}
            </div>
        </div>
    )
}

export default TopArtists;