import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setAuthedUser } from './../../store/actions/authedUser'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AddIcon from '@material-ui/icons/Add';
 
function Header () {
    const dispatch = useDispatch()
    const history = useHistory()

    const authedUser = useSelector(({users, authedUser}) => users?.[authedUser])


    const [drawerStatus, setDrawerStatus] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const logout = () => {
        dispatch(setAuthedUser(''))
    }

    const toggleDrawer = _ => {
        setDrawerStatus(!drawerStatus)
    }

    const handleRedirect = path => {
        history.push(path)
        toggleDrawer()
    }

    return (
        <>
            <Drawer 
                anchor='left'
                open={drawerStatus}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>

                <Divider/>
                <List>
                    <ListItem
                        button
                        onClick={() => handleRedirect('/')}
                    >
                        <ListItemIcon>
                            <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Questions'} />
                    </ListItem>

                    <ListItem 
                        button
                        onClick={() => handleRedirect('/leaderboard')}
                    >
                        <ListItemIcon>
                            <FormatListNumberedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Leader Board'} />
                    </ListItem>

                    <ListItem 
                        button
                        onClick={() => handleRedirect('/add')}
                    >
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Add Question'} />
                    </ListItem>
                </List>
            </Drawer>

            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Would you rather App
                    </Typography>

                    <div style={{marginLeft: 'auto'}}>
                        
                        <IconButton
                            onClick={(e) => {
                                if(authedUser) handleMenu(e)
                            }}
                            color="inherit"
                        >
                            {authedUser && authedUser.name}
                            <Avatar
                                style={{marginLeft: '10px'}}
                                src={authedUser?.avatarURL}
                            />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                        <MenuItem onClick={() => {
                            logout()
                            handleClose()
                        }}>Sign out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
                
            </AppBar>
        </>
    )
}

export default Header