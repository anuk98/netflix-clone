import React, { useEffect } from 'react'
import './Banner.css'
import { useState } from 'react'
import axios from '../axios'
import requests from '../request'
function Banner() {
  const baseURL="https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([])
    useEffect(()=>{
          const fetchData=async ()=>{
            const request =await axios.get(requests.NetflixOriginals)
            setMovies(request.data.results[
              Math.floor(Math.random()*request.data.results.length-1)
          ])
           
          }
          fetchData()
    },[])
    console.log(movies);
    function truncate(str,n){
      return str?.length > n? str.substr(0,n-1)+"...":str;
    }
  return (
    <div className='banner' style={{backgroundSize:'cover',
     backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
     backgroundPosition:'center center'}}>
        <div className="banner_content">
        <h1 className='banner_title'>{movies?.title || movies?.name||movies?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movies?.overview,150)}</h1>
        </div>
        <div className="banner_fadebottom"/>
    </div>
  )
}

export default Banner;