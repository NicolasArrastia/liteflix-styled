import React from 'react'
import { PlayCont } from './styled'

// Styles

export default function PlayButton() {

    const play = () => {
        // If you will want to play a movie you should use this funciton
        alert('reproducir')
    }

    return (
        <PlayCont onClick={play} className="play-button">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.6484 8.27005L1 1V15L11.6484 8.27005Z"/>
            </svg>
        </PlayCont>
    )
}
