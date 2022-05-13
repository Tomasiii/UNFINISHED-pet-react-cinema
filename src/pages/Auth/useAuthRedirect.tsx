import React, {useEffect} from 'react';
import isAuth from "@utils/isAuth";
import {useLocation, useNavigate} from "react-router-dom";

const useAuthRedirect = () => {
    const user = isAuth();
    const navigate = useNavigate();
    const {state}  = useLocation();

    useEffect(()=>{
        if(user){
            navigate(state === 'string' ? state : '/')
        }
    }, [user])
};

export default useAuthRedirect;