import './App.css'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
import { Task } from './components/Task'
import { useState } from 'react'
import { Header } from './components/Header'

interface TaskItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleAddTask = (newTask: TaskItem) => {
    setTasks([...tasks, newTask]);
  }

  const handleCompletedTasks = (isCompleted: boolean) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }

  return (
    <>
      < Header />

      <div className={styles.wrapper}>
        <NewTask onAddTask={handleAddTask} />

        <main>
          <div className={styles.task}>
            <Info completedTasks={completedTasks} />
            
            <div className={styles.list}>
              {tasks.map((task) => (
                <Task key={task.id} task={task} onCompletedTasks={handleCompletedTasks} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
