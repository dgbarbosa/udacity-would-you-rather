import { combineReducers } from 'redux'

import users from './../reducers/users'
import authedUser from './../reducers/authedUser'
import questions from './../reducers/questions'

export default combineReducers({
    users,
    authedUser,
    questions
})
