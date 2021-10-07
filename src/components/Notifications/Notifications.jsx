import React from 'react'

// Styles
import { NotifCont,NotifImg } from './styled'


export default function Notifications() {
    return (
        <NotifCont className="notification-icon">
            <NotifImg src="./img/bell.svg" alt="profile"/>
        </NotifCont>
    )
}
