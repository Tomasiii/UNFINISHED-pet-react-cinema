import React, {FC} from 'react';
import CheckRole from "@utils/Guard/CheckRole";
import CheckAuth from "@utils/Guard/CheckAuth";

type AuthGuard = {
    children: JSX.Element ,
    auth:boolean
}
type RoleGuard = {
    children: JSX.Element ,
    role:boolean
}

type TProps = RoleGuard & AuthGuard

const Guard = ({children, role, auth}: TProps ) => {
    if (role) return <CheckRole>{children}</CheckRole>
    return <CheckAuth>{children}</CheckAuth>
};

export default Guard;