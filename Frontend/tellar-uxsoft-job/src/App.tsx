import styles from "./App.module.css";
import "./global.css";

import UserRegister from "./pages/User/UserRegister";
import Container from "@mui/material/Container";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <UserRegister />
      </div>
    </>
  );
}
