// check is JSX.Element is : 1) memo  2) lazy  3) simple element 4) lazy > memo 5) memo > lazy

export const getRoleFlag = (children: JSX.Element): Record<string, boolean> => {
  const type = children.type;
  // mean it's my component with property 'isOnlyAdmin' or 'isOnlyUser'
  if (typeof type === "function") {
    return {
      isOnlyAdmin: type.isOnlyAdmin,
      isOnlyUser: type.isOnlyUser,
    };
  }

  // else children type  == object (memo, lazy) and we must resolve it
  if (type.$$typeof.description === "react.memo") {
    return getRoleFlag(type);
  } else if (type.$$typeof.description === "react.lazy") {
    if (type._payload._status == -1) {
      console.log("arguments", type._payload._result.arguments);
      console.log("caller", type._payload._result.caller);
    }
    if (type._payload._status == 1) {
      return getRoleFlag(type._payload._result.default);
    }
  }

  // newer

  console.error("newer");

  return {
    isOnlyAdmin: true,
    isOnlyUser: false,
  };
};
