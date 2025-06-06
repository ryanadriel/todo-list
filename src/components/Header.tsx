import todoLogo from "../assets/todo-logo1.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} className="logo" alt="Logo do ToDo" />
      </header>
    </>
  );
}
