import React from 'react'
import { Form, Formik } from 'formik'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import * as Yup from 'yup'
import './style.css'

function Poll (props) {

    const { handleSubmit, question } = props
    const { optionOne, optionTwo } = question

    return (
        <div className='poll-container'>
            <Formik
                className='question-form'
                initialValues={{
                    answer: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={
                    Yup.object().shape({
                        answer: Yup.string().required('Please choose an answer!')
                    })
                }
            >
                {({ values, handleChange }) => (
                    <Form>
                        <RadioGroup
                            name='answer' 
                            value={values.answer}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value={'optionOne'}
                                control={<Radio />}
                                label={optionOne.text}
                            />

                            <FormControlLabel
                                value={'optionTwo'}
                                control={<Radio />}
                                label={optionTwo.text}
                            />
                        </RadioGroup>
                        <Button 
                            className='btnSubmit'
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Poll