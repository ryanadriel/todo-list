import styles from "./Login.module.css";
import { Header } from "../../components/Header";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthHeader, clearAuthHeader, getTodos } from "../../services/todosService";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleLoginSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            setAuthHeader(username, password);

            await getTodos();

            navigate('/');

        } catch (err) {
            setError("Usuário ou senha inválidos.");
            clearAuthHeader();
            console.error("Falha na autenticação:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header isAuthenticated={false} onLogout={() => {}}/>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleLoginSubmit}>
                    <h2>Entrar</h2>

                    <input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" className={styles.button} disabled={isLoading}>
                        {isLoading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;