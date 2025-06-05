import axios from "axios";
import { Task } from '../types/Task';

const API_URL = "http://localhost:8080/todos";

export async function getAllTodos(): Promise<Task[]> {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function createTodo(data: { description: string; completed: boolean; }): Promise<Task> {
  const response = await axios.post(API_URL, data);
  return response.data[0]; // ou só .data dependendo da resposta
}

export async function updateTodo(id: number, data: Partial<Task>): Promise<Task> {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data[0]; // ou só .data
}

export async function deleteTodo(id: number): Promise<Task[]> {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}
