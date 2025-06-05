import styles from "./Task.module.css";
import { useState } from "react";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { Task as TaskType } from '../types/Task';

interface TaskProps {
  task: TaskType;
  onCompletedTasks: (isCompleted: boolean) => void;
  onDeleteTask: (taskId: string, isCompleted: boolean) => void;
}

export function Task({
  task,
  onCompletedTasks,
  onDeleteTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onCompletedTasks(!isChecked);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id, isChecked);
  };

  return (
    <div className={styles.task}>
      <label className={isChecked ? styles.completed : ""}>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />

        <div title={isChecked ? "Tarefa concluída" : "Tarefa não concluída"}>
          {isChecked ? (
            <CheckCircle weight="fill" className={styles.checkCircle} />
          ) : (
            <Circle weight="duotone" className={styles.circle} />
          )}
        </div>

        {task.title}
      </label>

      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
