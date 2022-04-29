import gif from "@assets/gif/error.gif";

import styles from "./error-message.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <img src={gif} alt="Error" />
      <p>Error, reload the site</p>
    </div>
  );
};

export default ErrorMessage;
