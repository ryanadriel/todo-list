import './App.css'
import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
// import { Empty } from './components/Empty'
import { Task } from './components/Task'


function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <NewTask />

        <main>
          <div className={styles.task}>
            <Info />
            
            <div className={styles.list}>
              <Task />
              <Task />
              <Task />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
