import React, { useContext } from 'react'

import {AuthContext} from '../Contexts/Auth' 

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes(){

    const { signed } = useContext(AuthContext)
    
    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}
export default Routes