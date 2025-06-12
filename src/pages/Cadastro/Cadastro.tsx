import styles from "./Cadastro.module.css";
import { Header } from "../../components/Header";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { createUser } from "../../services/todosService";
import { UserCreateData } from '../../types';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleCadastroSubmit = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true);
        setError(null);
        setSuccess(null);

        const userData: UserCreateData = {
            username: user,
            password: password,
            role: 'USER'
        };

        try {
            await createUser(userData);

            setSuccess("Conta criada com sucesso! Redirecionando para o login em 3 segundos...");

            setName('');
            setUser('');
            setPassword('');

            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && (err.response.status === 409 || err.response.status === 400)) {
                    setError("Este usuário já está em uso ou os dados são inválidos.");
                } else {
                    setError("Ocorreu um erro de comunicação com o servidor.");
                }
            } else {
                setError("Ocorreu um erro inesperado. Tente novamente.");
            }
            console.error("Falha no cadastro:", err);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header isAuthenticated={false} onLogout={() => {}} />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleCadastroSubmit}>
                    <h2>Criar Conta</h2>

                    <input
                        type="text"
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isLoading}
                    />

                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>{success}</p>}

                    <button type="submit" className={styles.button} disabled={isLoading}>
                        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Cadastro;