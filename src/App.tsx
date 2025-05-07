import "./App.css";
import styles from "./App.module.css";
import { NewTask } from "./components/NewTask";
import { Info } from "./components/Info";
import { Task } from "./components/Task";
import { useState } from "react";
import { Header } from "./components/Header";
import { Empty } from "./components/Empty";

interface TaskItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleAddTask = (newTask: TaskItem) => {
    setTasks([...tasks, newTask]);
    setTotalTasks(totalTasks + 1);
  };

  const handleCompletedTasks = (isCompleted: boolean) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  };

  const handleDeleteTask = (taskId: string, isCompleted: boolean) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setTotalTasks(totalTasks - 1);

    if (isCompleted) {
      setCompletedTasks(completedTasks - 1);
    }
  };

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onAddTask={handleAddTask} />

        <main className={styles.task}>
          <Info totalTasks={totalTasks} completedTasks={completedTasks} />

          <div className={styles.list}>
            {tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  taskId={task.id}
                  onCompletedTasks={handleCompletedTasks}
                  onDeleteTask={handleDeleteTask}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
