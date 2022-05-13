import Heading from "@components/Headings/Heading";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Heading title={"Watch movies online"} />
      <div className={styles.home}>Home</div>
    </>
  );
};
export default Home;
