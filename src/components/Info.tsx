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
        <strong>{totalTasks}</strong>
      </div>

      <div className={styles.done}>
        <strong>Concluídas</strong>
        <strong>
          {completedTasks} de {totalTasks}
        </strong>
      </div>
    </div>
  );
}
