import todoLogo from "../assets/todo-logo.svg";
import { SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
    isAuthenticated: boolean;
    onLogout: () => void;
  }

export function Header({ isAuthenticated, onLogout }: HeaderProps) {


  return (
      <header className={styles.header}>
        {isAuthenticated ? (
          <button className={styles.logoutButton} onClick={onLogout}>
            Logout
            <SignOut size={20} weight="bold" />
          </button>
        ) : (
          <div className={styles.authButtons}>
            <Link to="/login" className={styles.authButton}>
              Login
            </Link>
            <Link to="/cadastro" className={`${styles.authButton} ${styles.signUpButton}`}>
              Criar conta
            </Link>
          </div>
        )}

        <img src={todoLogo} className="logo" alt="Logo do ToDo" />
      </header>
  );
}
