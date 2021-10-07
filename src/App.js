import React, {useState,useEffect} from 'react'
// import React, { Component } from 'react'

// Components
import Header from './components/Header/Header'
import UploadMovie from './components/UploadMovie/UploadMovie'
import MovieList from './components/MovieList/MovieList'
import MainMovie from './components/MainMovie/MainMovie';
import Background from './components/Background/Background';

// Styles


const BANNER = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'


export default function App() {
  const [movieTitle,setMovieTitle] = useState();
  const [movieImage,setMovieImage] = useState();

  useEffect(() => {
    // Fetching data so we can render the info
    fetch(BANNER)
    .then(res=>res.json())
    .then(data=> {
      setMovieTitle(data.results[0].title)
      setMovieImage('https://image.tmdb.org/t/p/original'+data.results[0].backdrop_path)
    })
    .catch(err=>{
      console.log(err);
      setMovieTitle('Error')
    })
  }, [])



  
  return (
    <>
        <Header/>
        <Background image={movieImage} name={movieTitle} />
        <main>
          <MainMovie movieTitle={movieTitle}></MainMovie>
          <MovieList></MovieList>
        </main>
        <UploadMovie></UploadMovie>
    </>
  )
}