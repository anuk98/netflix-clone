import React from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Row from './components/Row'
import request from './request'

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={request.NetflixOriginals} isLargeRow={true}/>
      <Row title='Trending Now' fetchUrl={request.Trending}/>
      <Row title='Top Rated' fetchUrl={request.TopRated}/>
      <Row title='Action Movies' fetchUrl={request.ActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={request.ComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={request.HorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={request.RomanceMovies}/>
      <Row title='Documentaries' fetchUrl={request.Documentries}/>
    

    </div>
  )
}

export default App;