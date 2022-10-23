import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error , Loader , SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/ShazamCore';


const AroundYou = () => {
    const [country , setCountry] = useState('');
    const [loading , setLoading] = useState('');
    const {activeSong , isPlaying } = useSelector((state) => state.player);
    const {data , isFetching , error} = useGetSongsByCountryQuery(country);
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_SayjeLGN9347oQpo6jHCKhX5u6pCG`)
        .then((response) => setCountry(response?.data?.location?.country))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } , [country]);


    if(isFetching && loading) return <Loader title='loading songs around you' />
    if(error && country) return <Error />

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mb-10 mt-4'>
                Around You 
                <span className='font-black'> "{country}"</span>
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song , i) => <SongCard
                    key={song.key}
                    song={song} 
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={i}
                />)}

            </div>
        </div>
    )
}

export default AroundYou