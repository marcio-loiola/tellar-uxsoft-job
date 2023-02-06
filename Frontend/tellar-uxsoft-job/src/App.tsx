import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";
import { UserForms } from "./components/UserForms/UserForms";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainContent>
          <UserForms />
        </MainContent>
        <Footer />
      </div>
    </>
  );
}
