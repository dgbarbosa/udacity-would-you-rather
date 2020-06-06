import React from 'react'
import './styles.css'

import Avatar from '@material-ui/core/Avatar'

function Card ({ imageURL, title, component: Component, margin }) {

    return(
        <div className='card-container' style={{margin}}>
            {
                title && (
                    <div className='card-header'>
                        {title}
                    </div>
                )
            }
            <div className='card-body'>
                {
                    imageURL && (
                    <div className='card-image'>
                        <Avatar className='avatar' src={imageURL} />
                    </div>
                    )
                }
                <div className='card-component'>
                    {Component}
                </div>
            </div>
        </div>
    )
}

export default Card