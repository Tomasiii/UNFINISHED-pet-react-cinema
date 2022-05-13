import isAuth from "@utils/isAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {ChildrenWithRole, TypeRoles, WithRole} from "@providers/auth/auth.types";
import CheckAuth from "@utils/Guard/CheckAuth";
import {FC} from "react";


const CheckRole: FC<{ children: ChildrenWithRole }> = ({children}) => {
    const user = isAuth()
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {isOnlyAdmin, isOnlyUser} = children

    const Children = () => <>{children}</>

    if (!isOnlyAdmin && !isOnlyUser) return <Children/>

    if (user?.isAdmin) return <Children/>

    if (isOnlyAdmin) {
        pathname !== '/404' && navigate('/404', {replace: true})
        return null
    }

    const isUser = user && !user.isAdmin

    if (isUser && isOnlyUser) return <Children/>

    return <CheckAuth><Children/></CheckAuth>

}

export default CheckRole
