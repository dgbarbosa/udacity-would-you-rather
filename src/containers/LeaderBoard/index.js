import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LeaderboardCardContent from './../../components/LeaderboardCardContent'

function LeaderBoard () {

    const users = useSelector(state => state.users)
    const questions = useSelector(state => state.questions)

    const [leaderBoard, setLeaderBoard] = useState([])

    useEffect(() => {
        setLeaderBoard(
            Object.keys(users).map((user) => {
                const {
                    name,
                    avatarURL,
                    questions,
                    answers
                } = users[user]

                return {
                    name,
                    avatarURL,
                    askedQuestions: questions.length,
                    answeredQuestions: Object.keys(answers).length,
                    totalScore: Object.keys(answers).length + questions.length
                }
            })
        )
    },[users,questions])

    return (
        <>
            {
                leaderBoard
                .sort((a,b) => b.totalScore - a.totalScore)
                .map(({name, avatarURL, askedQuestions, answeredQuestions, totalScore}, index) => (

                    <LeaderboardCardContent
                        key={index}
                        name={name}
                        avatarURL={avatarURL}
                        askedQuestions={askedQuestions}
                        answeredQuestions={answeredQuestions}
                        totalScore={totalScore}
                    />
                ))
            }
        </>
    )
}

export default LeaderBoard