import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: uuidv4(),
        title: newTask,
        isCompleted: false,
      };

      onAddTask(newTaskObj);
      setNewTask("");
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
