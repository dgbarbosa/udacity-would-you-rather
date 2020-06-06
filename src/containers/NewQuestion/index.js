import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './../../components/Card'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './style.css'
import { handleSendQuestion } from './../../store/actions/questions'
import { useHistory } from 'react-router-dom'

function NewQuestion () {

    const dispatch = useDispatch()
    const history = useHistory()

    const authedUser = useSelector(state => state.authedUser)

    const handleSubmit = values => {
        dispatch(
            handleSendQuestion({
                ...values,
                author: authedUser
            })
        )
        history.push('/')
    }

    return (
        <div style={{
            display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '10px auto'}}>
            <Card
                title='Create New Question'
                component={
                    <div className='newQuestion-container'>
                        <h3>Complete the question:</h3>

                        <h2>Would you rather ...</h2>

                        <Formik
                            initialValues={{
                                optionOneText: '',
                                optionTwoText: ''
                            }}
                            validationSchema={
                                Yup.object().shape({
                                    optionOneText: 
                                        Yup.string()
                                        .required('Required field'),
                                    optionTwoText: 
                                        Yup.string()
                                        .required('Required field'),
                                })
                            }
                            onSubmit={handleSubmit}
                        >
                            {({handleChange, values, errors, touched}) => (
                                <>
                                    <Form className='newQuestion-container'>
                                        <TextField
                                            name='optionOneText'
                                            value={values.optionOneText}
                                            label='Enter Option One Text Here'
                                            onChange={handleChange}
                                            className='form-input'
                                        />
                                        {errors.optionOneText && touched.optionOneText && <p>{errors.optionOne.Text}</p>}

                                        <TextField
                                            name='optionTwoText'
                                            value={values.optionTwoText}
                                            label='Enter Option Two Text Here'
                                            onChange={handleChange}
                                            className='form-input'
                                        />
                                        {errors.optionTwoText && touched.optionTwoText && <p>{errors.optionTwoText}</p>}

                                        <Button 
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className='newQuestion-btn-submit'
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </>
                            )}
                        </Formik>

                    </div>
                }
            />
            </div>
    )
}

export default NewQuestion