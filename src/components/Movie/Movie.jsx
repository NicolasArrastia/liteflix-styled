import React from 'react'

// Components
import PlayButton from '../PlayButton/PlayButton';

// Styles
import { MovieContainer, MovieDetails, MovieImage, MovieMain, MovieTitle } from './styled';


export default function Movie(props) {
    const movie = props.movieData;
    let movieImage = '';
    let movieTitle = movie.title;
    let releaseDate=''; 

    // If it's a Local movie this will prevent an error
    if (props.isLocal){
        movieImage=movie.image;
    }else{
        releaseDate=movie.release_date.slice(0,4);
        movieImage='https://image.tmdb.org/t/p/w500'+movie.backdrop_path
    }

    // If the movie title is excesively long
    if(movieTitle.length>16){
        movieTitle=movieTitle.substring(0,16).concat('...')
    }

    return (
        <MovieContainer>
            <MovieMain>
                <PlayButton></PlayButton>
                <MovieTitle className="movie-container__title">
                    {movieTitle}
                </MovieTitle>
            </MovieMain>
            <MovieImage className="movie-container__image" src={movieImage} alt={movie.title}/>
            <MovieDetails>
                {
                    // And this will also prevent an error if it's a local movie
                    (props.isLocal)?
                    null
                    :
                    <span className="movie-container__vote-average">
                        <img src="./img/star.svg" alt="star_icon"/>
                        {movie.vote_average}
                    </span>
                }
                <span className="movie-container__release-date">
                    {releaseDate}
                </span>
                {/* <PlayButton></PlayButton> */}
                {/* <MovieTitle>{movieTitle}</MovieTitle> */}
            </MovieDetails>
        </MovieContainer>
    )
}
