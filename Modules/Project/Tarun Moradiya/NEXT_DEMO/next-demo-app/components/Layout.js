import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from "./Header";
import Meta from "./Meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
