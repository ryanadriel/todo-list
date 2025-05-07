import styles from './Task.module.css'
import { useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

export function Task( { onCompletedTasks }: { onCompletedTasks: (isCompleted: boolean) => void } ) {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onCompletedTasks(!isChecked);
  }

  return(
    <div className={styles.task}>
      <label className={isChecked ? styles.checked : 'teste'}>
      <input type='checkbox' checked={isChecked} onChange={toggleCheckbox} />

      <div>
        {
          isChecked ? 
          <CheckCircle weight='fill' className={styles.checkCircle} /> :
          <Circle weight='duotone' className={styles.circle} />
        }
      </div>

      Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.

      </label>

      <button title='Deletar tarefa'>
        <Trash />
      </button>
    </div>
  )
}