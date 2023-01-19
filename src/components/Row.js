import instance from '../axios';
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from 'react'
const baseURL="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState('')
    useEffect(() => {
      const fetchData=async ()=>{
        const request= await instance.get(fetchUrl)
       
        setMovies(request.data.results)
       
      }
      fetchData();
    }, [fetchUrl])
    const opts={
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleClick=(movie)=>{
      if(trailerUrl){
        setTrailerUrl('')
      }
      else{
        movieTrailer(movie?.name || '')
        .then((url)=>{
          const urlParams=new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'))
          console.log(urlParams.get('v'));
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="row_posters">
          {movies.map((items)=>{
            return(
              <img key={items.id}
              onClick={()=>{handleClick(items)}}
              className={`row_poster ${isLargeRow && 'row_largeposter'}`}
               src={`${baseURL}${isLargeRow?items.poster_path:items.backdrop_path}`} alt={items.name} />)
            
          })}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row