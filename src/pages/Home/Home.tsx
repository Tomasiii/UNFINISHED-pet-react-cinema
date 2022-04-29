import MainLayout from "@layouts/MainLayout";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>Home</div>
    </MainLayout>
  );
};
export default Home;
