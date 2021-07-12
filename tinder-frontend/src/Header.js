import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header-icon" fontSize="large" />
            </IconButton>

            <img
                className="tinder-logo"
                src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo.png" />

            <IconButton>
                <ForumIcon className="header-icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
