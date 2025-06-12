import axios from 'axios';
import { User, UserCreateData } from '../types';

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthHeader = (username: string, password: string) => {
    const token = btoa(`${username}:${password}`);
    apiClient.defaults.headers.common['Authorization'] = `Basic ${token}`;
    localStorage.setItem('authToken', token);
};

export const clearAuthHeader = () => {
    delete apiClient.defaults.headers.common['Authorization'];
    localStorage.removeItem('authToken');
};

interface Todo {
    id: number;
    title: string;
    description: string;
    done: boolean;
    priority: number;
    username: string;
}

export const createUser = async (userData: UserCreateData): Promise<User> => {
    const response = await apiClient.post<User>('/users', userData);
    return response.data;
};

export const getTodos = async (): Promise<Todo[]> => {
    const response = await apiClient.get('/todos');
    return response.data;
};

export const createTodo = async (title: string): Promise<Todo> => {
    const newTodoData = {
        title: title,
        description: "exemplo",
        done: false,
        priority: 1
    };

    console.log("Dados do novo Todo:", newTodoData);

    const response = await apiClient.post<Todo>('/todos', newTodoData);
    console.log("Resposta da criação do Todo:", response.data);
    return response.data;
};

export const updateTodo = async (id: number, todoData: Partial<Todo>): Promise<Todo> => {
    console.log("Atualizando Todo ID:", id, "com dados:", todoData);
    const response = await apiClient.put(`/todos/${id}`, todoData);
    return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
    await apiClient.delete(`/todos/${id}`);
};