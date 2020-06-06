import { 
    RECEIVE_USERS,
    RECEIVE_USER_ANSWER,
    RECEIVE_USER_QUESTION
 } from './../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            const { users } = action
            return {
                ...state,
                ...users
            }
        case RECEIVE_USER_ANSWER:
            const { authedUser, answer, qid } = action 
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case RECEIVE_USER_QUESTION:
            const { id, author } = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [
                        ...state[author].questions,
                        id
                    ]
                    
                }
            }
        default:
            return state
    }
}