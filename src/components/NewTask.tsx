import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { SetStateAction, useState } from "react";
import { createTodo } from "../service/todoService";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    try {
      const createdTodo = await createTodo({
        description: newTask,
        completed: false,
      });

      onAddTask(createdTodo);
      setNewTask("");
    } catch {
      console.error("Erro ao adicionar tarefa");
      alert("Erro ao adicionar tarefa");
    }
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div className={styles.newTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      <button onClick={handleAddTask} className={styles.button}>
        Criar 
        <PlusCircle />
      </button>
      </div>

    </>
  );
}
