import ReduxToastrLib from "react-redux-toastr";

const ReduxToastr = () => {
  return (
    <ReduxToastrLib
      newestOnTop={false}
      preventDuplicates
      progressBar
      closeOnToastrClick
      timeOut={3000}
    />
  );
};

export default ReduxToastr;
