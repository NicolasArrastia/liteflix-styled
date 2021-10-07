import React from 'react'

// Components
// import '../Button/Button'
import Button from '../Button/Button';

// Styles
import { BtnContainer, MainCont, MovieTitle, OriginalText } from './styled';

export default function MainMovie(props) {
    const movieTitle = props.movieTitle;

    const playMovie = () => {
        alert('reproducir película en cartelera')
    }

    const addToList = () => {
        alert('añadir a la lista')
    }

    return (
        <MainCont className="main-movie">
            <OriginalText className="main-movie__original">
                Original de <span>liteflix</span>
            </OriginalText>
            <MovieTitle className="main-movie__title">{movieTitle}</MovieTitle>
            <BtnContainer className="main-movie__options">
                <Button onClick={() => playMovie()} text="Reproducir" img={1}></Button>
                <Button onClick={() => addToList()} secondary text="Mi lista" img={2}></Button>
            </BtnContainer>
        </MainCont>
    )
}