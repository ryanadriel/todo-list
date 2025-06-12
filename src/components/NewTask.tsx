import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { useState, FormEvent, ChangeEvent } from "react";

interface NewTaskProps {
  onAddTask: (title: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <>
      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={handleTitleChange}
        />
        <button type="submit" className={styles.button}>
          Criar
          <PlusCircle />
        </button>
      </form>

    </>
  );
}