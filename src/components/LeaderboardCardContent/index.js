import React from 'react'
import Card from './../Card'

import './style.css'

function LeaderboardCardContent({name, answeredQuestions, askedQuestions, totalScore, avatarURL}) {
    return (
        <div style={{display: 'flex',
        flexDirection: 'column',
        maxWidth: '700px',
        margin: '10px auto'}}>
            <Card
            imageURL={avatarURL}
            component={
                <div className='leaderboard-container'>
                    <div className='left-container'>
                        <div className='header'>
                            <h2>{name}</h2>
                        </div>

                        <div className='questions-score-container'>
                            <div className='question-score'>
                                <p>Answered questions</p>
                                <p className='score'>{answeredQuestions}</p>
                            </div>
                            <div className='question-score'>
                                <p>Asked questions</p>
                                <p className='score'>{askedQuestions}</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <Card
                            title='Score'
                            component={
                                <div className='score-container'>
                                    <p>{totalScore}</p>
                                </div>
                            }
                        />
                    </div>
                </div>

            }
        />
        </div>
    )
}

export default LeaderboardCardContent