import React, { useEffect, useState } from 'react'
import { Route, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

export const ProtectedRoute = ()=>{
    
    const cookies = new Cookies()
    let user = cookies.get('user')

    return(
        user ? <Outlet /> : <Navigate to='/login' />
    )
}