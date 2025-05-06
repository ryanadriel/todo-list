import './App.css'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import { Info } from './components/Info'


function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <NewTask />
        <Info />
      </div>
    </>
  )
}

export default App
