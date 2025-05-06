import './App.css'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import { Info } from './components/Info'
import { Empty } from './components/Empty'


function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <NewTask />

        <div className={styles.tasks}>
          <Info />
          <Empty />
        </div>
      </div>
    </>
  )
}

export default App
