import { getUsers } from './../../core/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER_ANSWER = 'RECEIVE_USER_ANSWER' 
export const RECEIVE_USER_QUESTION = 'RECEIVE_USER_QUESTION'


export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function receiveUserAnswer ({authedUser, qid, answer}) {
    return {
        type: RECEIVE_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleReceiveUser () {
    return (dispatch) => {
        return getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function receiveUserQuestion ({id, author}) {
    return {
        type: RECEIVE_USER_QUESTION,
        id,
        author
    }
}