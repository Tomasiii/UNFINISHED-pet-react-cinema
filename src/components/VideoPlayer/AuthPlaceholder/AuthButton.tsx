import { Link } from "react-router-dom";

import style from "./auth-placeholder.module.scss";

interface IProps {
  slug: string;
}

const AuthButton = ({ slug }: IProps) => {
  return (
    <Link to={`auth/redirect=${slug}`} className={style.btn}>
      Sign In
    </Link>
  );
};

export default AuthButton;
