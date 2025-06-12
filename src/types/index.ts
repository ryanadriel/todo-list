export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export interface User {
  id: number;
  username: string;
  role: string;
}

export interface UserCreateData {
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
}