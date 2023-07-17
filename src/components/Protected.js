import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const Protected = ({children}) => {

    const {authUser} = useAuth()
    if(!authUser) return <Navigate to='/login'/>

  return  children
}

export default Protected