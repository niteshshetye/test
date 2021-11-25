import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({isAuth, component: Component, ...rest }) => {

    return (
        <Route 
            {...rest} 
            render={(props)=>{
                isAuth?  <Component />: <Redirect to={{pathname: '/login', state: {from: props.location}}} />            
            }}
        />
    )
}

export default ProtectedRoute
