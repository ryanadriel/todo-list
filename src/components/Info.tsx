import styles from './Info.module.css'


export function Info(){
  return(
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
  )
}