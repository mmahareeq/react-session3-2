import React, {useState,useEffect} from 'react'
import Load from './Loading'
import Cardone from './oneCard'
import axios from 'axios';
export default function Cards() {
    const [data ,setDate] = useState([]);
    const fetchData = async(url)=>{
        const re = await axios.get(url, {
            headers: {
                'app-id': '613e64e2748b558d779ce190'
            }
          }); 
        const D = re.data.data;
        setDate(D);
    }
    useEffect(()=>{
         fetchData(`https://dummyapi.io/data/v1/user?limit=50`);  
          },[])
    
    return (

        <div className="card">
            {!data.length ? <Load/> : data.map(item=><Cardone Data = {item}/>)}
        </div>
    )
}