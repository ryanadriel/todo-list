import styles from './Task.module.css'
import { useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

interface TaskProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  
  onCompletedTasks: (isCompleted: boolean) => void;
}

export function Task( { task, onCompletedTasks }: TaskProps ) {

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

        {task.title}
      </label>

      <button title='Deletar tarefa'>
        <Trash />
      </button>
    </div>
  )
}