import React from 'react'
import './style.css'

import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'

function AnsweredPoll ({authedUser, question}) {

    const {
        optionOne,
        optionTwo
    } = question

    const options = [optionOne, optionTwo]

    const quantityVotes = 
        optionOne.votes.length + 
        optionTwo.votes.length

    const calculatePercentage = votes => Math.round(votes * 100 / quantityVotes)

    return(
        <div className='container'>
            <h2>Results</h2>

            <div className='body'>
                {
                    options.map((option, index) => (
                        <div key={index} className={`question ${option.votes.includes(authedUser.id) && 'answered'}`}>
                            <p>
                                {
                                    ` Would you rather ${option.text}`
                                }
                            </p>

                            <div className='percentage-container'>
                                <Box display='flex' alignItems='center'>
                                    <Box width='100%' mr={1}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={calculatePercentage(option.votes.length)}
                                        />
                                    </Box>
                                    <Box>
                                        <p>
                                            {calculatePercentage(option.votes.length)}%
                                        </p>
                                    </Box>
                                </Box>
                                <p>
                                    {`${option.votes.length} out of ${quantityVotes} votes`}
                                </p>
                            </div>

                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default AnsweredPoll