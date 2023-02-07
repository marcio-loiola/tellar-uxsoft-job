import styles from "./App.module.css";
import "./global.css";

import Container from "@mui/material/Container";
import UsersPanel from "./pages/User/UsersPanel";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <UsersPanel />
      </div>
    </>
  );
}
