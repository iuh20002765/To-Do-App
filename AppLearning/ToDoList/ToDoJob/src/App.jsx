import './App.css'
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'
import todo from './assets/img/target.png'
import ongoing from './assets/img/to-do-list.png'
import done from './assets/img/checkbox.png'
import { useState, useEffect } from 'react'

const myTask = localStorage.getItem('tasks')

function App() {
  const [tasks, setTasks] = useState(JSON.parse(myTask) || [])
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleRemove = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return
    const taskMoving = tasks[activeCard]
    const updatedTask = tasks.filter((tasl, index) => index !== activeCard)

    updatedTask.splice(position, 0, {
      ...taskMoving,
      status: status
    })

    setTasks(updatedTask)
  }

  return (
    <>
      <div className='app'>
        <TaskForm setTasks={setTasks} />
        <main className='app_main'>
          <TaskColumn
            title='To do'
            icon={todo}
            tasks={tasks}
            status='todo'
            handleRemove={handleRemove}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title='On going'
            icon={ongoing}
            tasks={tasks}
            status='ongoing'
            handleRemove={handleRemove}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title='Done'
            icon={done}
            tasks={tasks}
            status='done'
            handleRemove={handleRemove}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </main>
      </div>
    </>
  )
}

export default App
