import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error , Loader , songCard } from '../components';


const AroundYou = () => {
    const [country , setCountry] = useState('');
    const [loading , setLoading] = useState('');
    const {activeSong , isPlaying } = useSelector((state) => state.player);

    return (
    
    <div>AroundYou</div>
  )
}

export default AroundYou