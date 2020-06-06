import React from 'react'
import Button from '@material-ui/core/Button'
import './styles.css'

function QuestionResume (props) {
    const { title, resume, buttonAction, buttonText} = props
    return (
        <div className='questionResume-container'>
            <h3 className='title'>{title}</h3>
            <p className='resume'>{resume}</p>
            <Button
                onClick={buttonAction}
                color='primary'
                variant='contained'
                className='button'
            >
                {buttonText}
            </Button>
        </div>
    )
}

export default QuestionResume