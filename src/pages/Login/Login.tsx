import styles from "./Login.module.css";
import { Header } from "../../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form}>
          <h2>Entrar</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className={styles.button}>Entrar</button>
        </form>
      </div>
    </>
  );
};

export default Login;