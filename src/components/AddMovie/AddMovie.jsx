import React from 'react'

// Styles
import {AddCont, AppIcon, AppText, PlusIcon} from './styled'

export default function AddMovie() {
    function toggleAddMovie (e){
        e.preventDefault()
        const el = document.getElementById('upload_movie')
        el.style.visibility = 'visible'

        const main=document.getElementById('main')
        main.style.overflow = 'hidden'
    }

    return (
        <AddCont onClick={toggleAddMovie}>
            <AppIcon>
                <PlusIcon scale="0.7"/>
            </AppIcon>
            <AppText className="add-movie__text">
                agregar película
            </AppText>
        </AddCont>
    )
}
