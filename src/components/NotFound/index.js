import React from 'react'

function NotFound ({message}) {
    return(
        message 
            ? <h1>{`404 ${message}`}</h1>
            : <h1>404 PAGE NOT FOUND</h1>
    )
}

export default NotFound