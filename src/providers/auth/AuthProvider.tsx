import Cookies from 'js-cookie'
import { FC, useEffect } from 'react'

import { useActions } from '@hooks/useActions'
import isAuth from "@utils/isAuth";
import {useLocation} from "react-router-dom";

const AuthProvider = () => {
    const  user  = isAuth()
    const { checkAuth, logout } = useActions()
    const {pathname} = useLocation();


    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if (accessToken) checkAuth()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if (!refreshToken && user) logout()
    }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    return null
}

export default AuthProvider
