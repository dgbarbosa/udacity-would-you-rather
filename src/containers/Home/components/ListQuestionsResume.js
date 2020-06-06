import React from 'react'

import Card from './../../../components/Card'
import QuestionResume from './../../../components/QuestionResume'

function ListQuestionsResume (props) {
    const { questions, users, buttonAction } = props

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',
            margin: '10px auto'
        }}>
            {
                questions.map((question) => (
                    <Card
                        key={question.id}
                        title={`${users[question.author].name} asks`}
                        imageURL={users[question.author].avatarURL}
                        margin={'0 0 10px 0'}
                        component={
                            <QuestionResume
                                title={'Would you rather'}
                                resume={question.optionOne.text}
                                buttonText={'View poll'}
                                buttonAction={_ => buttonAction(question.id)}
                            />}
                    />
                ))
            }

        </div>
    )
}

export default ListQuestionsResume