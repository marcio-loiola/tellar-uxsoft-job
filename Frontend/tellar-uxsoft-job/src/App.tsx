import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </>
  );
}
