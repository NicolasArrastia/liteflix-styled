import React from 'react'

// Styles
import { LiteflixStyled, Lite, Flix } from './styled'

export default function Liteflix(props) {
    return (
        <LiteflixStyled href="google.com">
            <Lite>Lite</Lite>
            <Flix>flix</Flix>
        </LiteflixStyled>
    )
}
