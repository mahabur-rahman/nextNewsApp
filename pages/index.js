import Head from "next/head";
import Toolbar from "../Components/Toolbar";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="News Application" />
      </Head>
      <Toolbar />
      <div className="py-5 my-5 text-center">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, odio.
        </p>
      </div>
    </div>
  );
};

export default Home;
