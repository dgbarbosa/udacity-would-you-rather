import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { handleReceiveQuestions } from './../../store/actions/questions'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TabPanel from './../../components/TabPanel'
import ListQuestionsResume from './components/ListQuestionsResume'
import isEmpty  from './../../utils/isEmpty'

function Home () {

    const dispatch = useDispatch()
    const history = useHistory()

    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)
    const authedUser = useSelector(state => users[state.authedUser])

    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const [unansweredQuestions, setUnansweredQuestions] = useState([])
    const [value, setValue] = useState(0)
    
    useEffect(() => {
        dispatch(handleReceiveQuestions())
    }, [dispatch])

    useEffect(() => {
        if(
            !isEmpty(questions) &&
            !isEmpty(authedUser)
            ) {
                setAnsweredQuestions(
                    Object.keys(authedUser.answers)
                    .map(id => questions[id]).sort((a,b) => b.timestamp - a.timestamp)
                )             
            }
        }, [questions, authedUser])
        
        useEffect(() => {
            const answeredQuestionsIds = answeredQuestions.map(question => question?.id)

            setUnansweredQuestions(
                Object.keys(questions)
                    .filter(key => answeredQuestionsIds.includes(key) === false && true)
                    .map(id => questions[id]).sort((a,b) => b.timestamp - a.timestamp)
            )

    }, [answeredQuestions, questions])
    
    const handleChange = (_, newValue) => {
        setValue(newValue)
    }

    const handleQuestionSelect = id => history.push(`/questions/${id}`)

    return (
        <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ListQuestionsResume
                    questions={unansweredQuestions}
                    users={users}
                    buttonAction={handleQuestionSelect}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListQuestionsResume
                    questions={answeredQuestions}
                    users={users}
                    buttonAction={handleQuestionSelect}
                />
            </TabPanel>
        </>
    )
}

export default Home;