import React from "react";

import CheckAuth from "@utils/guard/CheckAuth";
import CheckRole from "@utils/guard/CheckRole/CheckRole";

type TProps = {
  children: JSX.Element;
  guardBy: "auth" | "role";
};

const Guard = ({ children, guardBy }: TProps) => {
  if (guardBy === "role") return <CheckRole>{children}</CheckRole>;
  if (guardBy === "auth") return <CheckAuth>{children}</CheckAuth>;
  return null;
};

export default Guard;
