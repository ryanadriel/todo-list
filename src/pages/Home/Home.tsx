import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { clearAuthHeader } from "../../services/todosService";
import { getTodos, createTodo, deleteTodo, updateTodo } from '../../services/todosService';

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty";

import { Todo } from '../../types';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
            fetchTodos();
        } else {
            setIsAuthenticated(false);
            setLoading(false);
        }
    }, []);

    const fetchTodos = async () => {
            try {
                setLoading(true);
                const data = await getTodos();
                setTodos(data);
                setError(null);
            } catch (err) {
                setError('Falha ao carregar as tarefas.');
                console.error("Detalhes do erro:", err);
            } finally {
                setLoading(false);
            }
    };

    const handleAddTask = async (taskTitle: string) => {
        try {
            const createdTodo = await createTodo(taskTitle);

            console.log("Tarefa criada:", createdTodo);
            setTodos(prevTodos => [...prevTodos, createdTodo]);
        } catch (err) {
            alert('Faça o login ou crie uma conta.');
            console.error("Detalhes do erro:", err);
        }
    };

    const handleDeleteTask = async (taskId: number) => {
        try {
            await deleteTodo(taskId);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== taskId));
        } catch (err) {
            alert('Falha ao deletar a tarefa.');
            console.error("Detalhes do erro:", err);
        }
    };

    const handleToggleTaskCompletion = async (taskId: number, currentStatus: boolean) => {
        const originalTodos = [...todos];
        try {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === taskId ? { ...todo, done: !todo.done } : todo
                )
            );
            await updateTodo(taskId, { done: !currentStatus });
        } catch (err) {
            alert('Falha ao atualizar o status da tarefa.');
            console.error("Detalhes do erro:", err);
            setTodos(originalTodos);
        }
    };

    const handleLogout = () => {
        clearAuthHeader();
        setIsAuthenticated(false);
        navigate("/login");
    };

    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.done).length;

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

            <div className={styles.wrapper}>
                <NewTask onAddTask={handleAddTask} />

                <main className={styles.tasks}>
                    <Info totalTasks={totalTasks} completedTasks={completedTasks} />

                    <div className={styles.list}>
                        {totalTasks === 0 ? (
                            <Empty />
                        ) : (
                            todos.map((todo) => (
                                <Task
                                    key={todo.id}
                                    task={todo}
                                    onDeleteTask={handleDeleteTask}
                                    onToggleComplete={handleToggleTaskCompletion}
                                />
                            ))
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Home;