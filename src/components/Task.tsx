import styles from "./Task.module.css";
import { Circle, Trash, CheckCircle } from "phosphor-react";
import { Todo } from '../types';

interface TaskProps {
  task: Todo;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number, currentStatus: boolean) => void;
}

export function Task({ task, onDeleteTask, onToggleComplete }: TaskProps) {
  const isTaskCompleted = task.done;

  return (
    <div className={styles.task}>
      <label className={isTaskCompleted ? styles.completed : ""}>
        <input
          type="checkbox"
          className={styles.checkContainer}
          onChange={() => onToggleComplete(task.id, task.done)}
        />

        <div title={isTaskCompleted ? "Tarefa concluída" : "Marcar tarefa como concluída"}>
          {isTaskCompleted ? <CheckCircle weight="fill" className={styles.checkCircle} /> : <Circle weight="duotone" className={styles.circle}/>}
        </div>

        {task.title}
      </label>


      <button title="Deletar tarefa" onClick={() => onDeleteTask(task.id)}>
        <Trash />
      </button>
    </div>
  );
}

