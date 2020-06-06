import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'

import { handleReceiveUser } from './../../store/actions/users'
import { setAuthedUser } from './../../store/actions/authedUser'

import LoginForm from './LoginForm'

import Container from '@material-ui/core/Container'

function Login () {

    const history = useHistory()
    const users = useSelector(state => state.users)
    const location = useLocation()

    const dispatch = useDispatch()

    const handleSubmit = values => {
        const from = location.state.from.pathname
        const { user } = values
        dispatch(setAuthedUser(user))
        history.push(from)
    }

    useEffect(() => {
        dispatch(handleReceiveUser())
    }, [dispatch])

    return (
        <Container style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
            <LoginForm users={users} handleSubmit={handleSubmit} />
        </Container>
    )
}

export default Login