import styles from './Info.module.css'


export function Info({ completedTasks }: { completedTasks: number }) {
  return(
    <div className={styles.info}>
      <div className={styles.created}>
        <strong>Tarefas Criadas</strong>
        <strong>0</strong>
      </div>

      <div className={styles.done}>
        <strong>Concluídas</strong>
        <strong>{completedTasks} de 3</strong>
      </div>
    </div>
  )
}