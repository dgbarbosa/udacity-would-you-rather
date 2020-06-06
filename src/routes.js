import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from './containers/Login'
import Home from './containers/Home'
import Question from './containers/Question'
import LeaderBoard from './containers/LeaderBoard'
import NewQuestion from './containers/NewQuestion'
import Header from './components/Header'
import NotFound from './components/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    const authedUser = useSelector(state => state.authedUser)

    return (
        <Route
            {...rest}
            render={ props => (
                authedUser
                    ? (<Component {...props} />)
                    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )}
        />
    )
}

const Routes = () => (
    <> 
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/login' component={ () => <Login /> } />
            <PrivateRoute exact path='/' component={ () => <Home /> } />
            <PrivateRoute exact path='/questions/:id' component={ () => <Question /> } />
            <PrivateRoute exact path='/leaderboard' component={ () => <LeaderBoard /> } />
            <PrivateRoute exact path='/add' component={ () => <NewQuestion /> } />
            <Route path='*' component={ () => <NotFound /> } />
        </Switch>
    </BrowserRouter>
    </>
)


export default Routes