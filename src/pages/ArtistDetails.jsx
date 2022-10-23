import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {DetailsHeader , Error , Loader , RelatedSongs} from '../components';
import { useGetArtistDeatilsQuery } from '../redux/services/ShazamCore';

const ArtistDetails = () => {

    const {id : artistId} = useParams();
    const {activeSong , isPlaying} = useSelector(state => state.player)
    const {data : artistData , isFetching : isArtistDataFetching , error} = useGetArtistDeatilsQuery(artistId);




    if(isArtistDataFetching) return <Loader title='Searching song details' />
    if(error) return <Error />
    return (
    <div className='flex flex-col'>
        <DetailsHeader artistId={artistId} artistData={artistData} />
        <RelatedSongs
            data={Object.values(artistData?.songs)}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
        />
    </div>
  )
}

export default ArtistDetails;