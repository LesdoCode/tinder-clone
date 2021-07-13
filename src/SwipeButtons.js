import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/Icon';

export default function SwipeButtons() {
    let swiped = () => {};
    return (
        <div className='swipeButtons'>

            <IconButton onClick={swiped} className='swipedButtons__repeat iconButton'>
                <ReplayIcon fontSize='large' />
            </IconButton>

            <IconButton onClick={swiped} className='swipedButtons__left iconButton'>
                <CloseIcon fontSize='large' />
            </IconButton>

            <IconButton onClick={swiped} className='swipedButtons__star iconButton'>
                <StarRateIcon fontSize='large' />
            </IconButton>

            <IconButton onClick={swiped} className='swipedButtons__right iconButton'>
                <FavoriteIcon fontSize='large' />
            </IconButton>

            <IconButton onClick={swiped} className='swipedButtons__lightning iconButton'>
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    )
}
