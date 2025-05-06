import { Empty } from './Empty'
import styles from './Tasks.module.css'

export function Tasks(){
  return(
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas Criadas</strong>
          <strong>0</strong>
        </div>

        <div className={styles.done}>
          <strong>Concluídas</strong>
          <strong>0</strong>
        </div>
      </div>

      <Empty />
    </div>
  )
}