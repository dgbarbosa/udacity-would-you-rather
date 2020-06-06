import React from 'react'

function TabPanel (props){
    const { value, index, children } = props

    return (
        <div
            hidden={value !== index}
        >
            {value === index && children}
        </div>
    )
}

export default TabPanel