import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import Card from './../../components/Card'
import Poll from './../../components/Poll'
import AnseredPoll from './../../components/AnsweredPoll'
import NotFound from './../../components/NotFound'

import { handleSendAnswer, handleReceiveQuestions } from './../../store/actions/questions'

function Question () {

    const { id } = useParams()
    const history = useHistory()
    const questions = useSelector(state => state.questions)
    const dispatch = useDispatch()

    if(Object.keys(questions)) dispatch(handleReceiveQuestions())
    
    const selectedQuestion = questions[id]
    const users = useSelector(({users}) => users)
    const authedUser = useSelector(({authedUser}) => users[authedUser])

    
    const hasUserAnswered = authedUser.answers[id]


    const handleSubmit = ({answer}) => {
        const payload = {
            authedUser: authedUser.id,
            qid: id,
            answer,
        }

        dispatch(handleSendAnswer(payload))
        history.push('/')        
    }

    if(Object.keys(questions).length && selectedQuestion) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '500px',
                margin: '10px auto'
            }}>
            {
                hasUserAnswered
                ? (
                    <Card
                        imageURL={users[selectedQuestion?.author]?.avatarURL}
                        title={`Asked by ${authedUser.name}`}
                        component={
                            <AnseredPoll
                                question={selectedQuestion}
                                authedUser={authedUser}
                            />
                        }
                    />
                )
                : (
                    <Card
                        imageURL={users[selectedQuestion?.author]?.avatarURL}
                        title={'Would you rather'}
                        component={
                            <Poll 
                                question={selectedQuestion}
                                handleSubmit={handleSubmit}
                            />
                        }
                    />
                )
            }
            </div>
        )
    }

    if(Object.keys(questions).length && !selectedQuestion) {
        return <NotFound message='QUESTION NOT FOUND' />
    }

    return null

}

export default Question