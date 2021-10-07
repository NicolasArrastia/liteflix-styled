import React from 'react'

// Styled
import { BackgroundCont, BackgroundImg, BackgroundShadow } from './styled';

export default function Background(props) {
    const image = props.image;
    const name = props.name;

    return (
        <BackgroundCont className="background-image">
            <BackgroundImg src={image} alt={name}/>
            <BackgroundShadow/>
        </BackgroundCont>
    )
}
