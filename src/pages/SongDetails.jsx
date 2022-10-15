import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {DetailsHeader , Error , Loader , RelatedSongs} from '../components';
import { setActiveSong , playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/ShazamCore';

const SongDetails = () => {

    const {songid} = useParams();
    const disptach = useDispatch();
    const {activeSong , isPlaying} = useSelector(state => state.player)
    const {data, isFetching} = useGetSongDetailsQuery(songid);
    console.log(songid)
    return (
    <div className='flex flex-col'>
        <DetailsHeader artistId='' songData={data} />
        <div className='mb-10'>
            <h2 className='text-white font-bold text-3xl'>lyrics</h2>
            <div className='mt-5'>
                {data?.sections[1].type == 'LYRICS' ? data?.sections[1].text.map((line,index) => {
                    return <p className='text-gray-400 text-base my-1'>{line}</p>
                }) : <p className='text-gray-400 text-base my-1'>Sorry no lyrics found for this song</p> }
            </div>
        </div>
    </div>
  )
}

export default SongDetails