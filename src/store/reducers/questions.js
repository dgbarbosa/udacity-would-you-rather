import { 
    RECEIVE_QUESTIONS, 
    RECEIVE_QUESTION_ANSWER,
    RECEIVE_NEW_QUESTION
} from './../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            const { questions } = action
            return questions
        case RECEIVE_QUESTION_ANSWER:
            const { authedUser, qid, answer} = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [
                            ...state[qid][answer].votes,
                            authedUser
                        ]
                    }
                }
            }

        case RECEIVE_NEW_QUESTION:
            const question = action.payload
            const { id } = question
            return {
                ...state,
                [id]: question
            }
        default:
            return state
    }
}