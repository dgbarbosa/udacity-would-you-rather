import { 
    getQuestions,
    saveQuestionAnswer,
    saveQuestion
 } from './../../core/api'

 import { receiveUserAnswer, receiveUserQuestion } from './../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION_ANSWER = 'RECEIVE_QUESTION_ANSWER'
export const RECEIVE_NEW_QUESTION = 'RECEIVE_NEW_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleReceiveNewQuestion (payload) {
    return {
        type: RECEIVE_NEW_QUESTION,
        payload
    }
}

export function handleReceiveQuestions () {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleReceivedAnswer ({answer, authedUser, qid}) {
    return {
        type: RECEIVE_QUESTION_ANSWER,
        answer,
        authedUser,
        qid
    }
}

export function handleSendAnswer(payload) {
    return (dispatch) => {
        return saveQuestionAnswer(payload)
            .then(() => {
                dispatch(handleReceivedAnswer(payload))
                dispatch(receiveUserAnswer(payload))
            })
    }
}

export function handleSendQuestion(payload) {
    return (dispatch) => {
        return saveQuestion(payload)
        .then((question) => {
            dispatch(handleReceiveNewQuestion(question))
            dispatch(receiveUserQuestion(question))
        })
    }
}