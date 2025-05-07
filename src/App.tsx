import './App.css'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
import { Task } from './components/Task'
import { useState } from 'react'


function App() {

  const [completedTasks, setCompletedTasks] = useState(0);

  const handleCompletedTasks = (isCompleted: boolean) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <NewTask />

        <main>
          <div className={styles.task}>
            <Info completedTasks={completedTasks} />
            
            <div className={styles.list}>
              <Task onCompletedTasks={handleCompletedTasks} />
              <Task onCompletedTasks={handleCompletedTasks} />
              <Task onCompletedTasks={handleCompletedTasks} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
