import styles from "./Info.module.css";

interface completedTasksProps {
  completedTasks: number;
}

interface totalTasksProps {
  totalTasks: number;
}

export function Info({
  totalTasks,
  completedTasks,
}: totalTasksProps & completedTasksProps) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas Criadas</strong>
        <span>{totalTasks}</span>
      </div>

      <div className={styles.done}>
        <strong>Concluídas</strong>
        <span>
          {completedTasks} de {totalTasks}
        </span>
      </div>
    </div>
  );
}
