import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import './style.css'

function LoginForm (props) {
    
    const { users, handleSubmit } = props

    return (
            <Paper style={{width: '500px', padding: '0 0 30px 0'}}>
                <h1 style={{textAlign: 'center'}}>Sign in</h1>
                <Formik
                    initialValues={{
                        user: ''
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            user: Yup.string().required('Select an user')
                        })
                    }
                >
                    {({ handleChange, values, errors, touched }) => (
                        <>
                            <Form id='formContainer'>
                                <FormControl>
                                    <Select
                                        name="user"
                                        value={values.user}
                                        onChange={handleChange}
                                    >
                                    {Object.keys(users).map((key) => (
                                        
                                        <MenuItem
                                            key={users[key].id}
                                            value={users[key].id}
                                        >
                                            {users[key].name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                                { errors.user && touched.user && <p>{errors.user}</p> }
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    className="loginButton"
                                >
                                    Login
                                </Button>
                                
                            </Form>
                        </>
                    )}
                </Formik>
            </Paper>

                
    )
}

export default LoginForm