import React from 'react'

// Styles
import { ProfileCont, ProfileImg } from './styled'

export default function Profile() {
    return (
        <ProfileCont className="profile-icon">
            <ProfileImg src="./img/profile_picture.png" alt="profile"/>
        </ProfileCont>
    )
}
