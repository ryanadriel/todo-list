import styles from "./Cadastro.module.css";
import { Header } from "../../components/Header";

const Cadastro = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.form}>
          <h2>Criar Conta</h2>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;