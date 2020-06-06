import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
} from './../core/_DATA'

export function getUsers () {
    return _getUsers().then((users) => users)
}

export function getQuestions () {
    return _getQuestions().then((questions) => questions)
}

export function saveQuestionAnswer(payload){
    return _saveQuestionAnswer(payload).then((question) => question)
}

export function saveQuestion(payload) {
    return _saveQuestion(payload).then((question) =>  question)
}
