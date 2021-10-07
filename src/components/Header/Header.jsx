import React from 'react'

// Components
import Liteflix from '../Liteflix/Liteflix'
import AddMovie from '../AddMovie/AddMovie'
import Menu from '../Menu/Menu'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

// Styles
import { HeaderCont, HeaderNav } from './styled'

export default function Header() {
    return (
        <HeaderCont>
            <HeaderNav>
                <Liteflix></Liteflix>
                <AddMovie></AddMovie>
                <Menu></Menu>
                <Notifications></Notifications>
                <Profile></Profile>
            </HeaderNav>
        </HeaderCont>
    )
}