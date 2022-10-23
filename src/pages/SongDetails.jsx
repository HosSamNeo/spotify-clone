import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {DetailsHeader , Error , Loader , RelatedSongs} from '../components';
import { setActiveSong , playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery , useGetSongRelatedQuery } from '../redux/services/ShazamCore';

const SongDetails = () => {

    const {songid} = useParams();
    const dispatch = useDispatch();
    const {activeSong , isPlaying} = useSelector(state => state.player)
    const {data : songData, isFetching : isSongDetailFetching} = useGetSongDetailsQuery(songid);
    const {data , isFetching } = useGetSongRelatedQuery(songid);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    
    }

    const handlePlayClick = (song , i) => {
        dispatch(setActiveSong({song , data , i}));
        dispatch(playPause(true));
    }


    if(isSongDetailFetching || isFetching) return <Loader title='Searching song details' />
    return (
    <div className='flex flex-col'>
        <DetailsHeader artistId='' songData={songData} />
        <div className='mb-10'>
            <h2 className='text-white font-bold text-3xl'>lyrics</h2>
            <div className='mt-5'>
                {songData?.sections[1].type == 'LYRICS' ? songData?.sections[1].text.map((line,index) => {
                    return <p className='text-gray-400 text-base my-1'>{line}</p>
                }) : <p className='text-gray-400 text-base my-1'>Sorry no lyrics found for this song</p> }
            </div>
        </div>
        <RelatedSongs
            songData={songData}
            isSongDetailFetching={isSongDetailFetching}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
        />
    </div>
  )
}

export default SongDetails