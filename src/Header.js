import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'; 

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' className="header__icon"/>
            </IconButton>

            <img 
                className="header__logo"
                src='https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png'
                alt='logo'
            />
            <IconButton>
                <ForumIcon fontSize='large' className="header__icon"/>
            </IconButton>

        </div>
    )
}

export default Header;
