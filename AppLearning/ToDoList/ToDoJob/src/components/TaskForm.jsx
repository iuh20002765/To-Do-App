import { useState } from 'react'
import '../assets/css/TaskForm.css'
import Tag from './Tag'
import Proptypes from 'prop-types'

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: []
  })

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag)
  }

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag)
      setTaskData((prev) => {
        return { ...prev, tags: filterTags }
      })
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] }
      })
    }
  }

  function handleChange(e) {
    const { name, value } = e.target

    setTaskData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData)
    setTasks((prev) => {
      return [...prev, taskData]
    })
    setTaskData({ task: '', status: 'todo', tags: [] })
  }
  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='task_input'
          placeholder='Enter your task...'
          name='task'
          onChange={handleChange}
          value={taskData.task}
        />
        <div className='task_form_bottom_line'>
          <div>
            <Tag
              tagName='HTML'
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Tag
              tagName='Java'
              selectTag={selectTag}
              selected={checkTag('Java')}
            />
            <Tag
              tagName='React'
              selectTag={selectTag}
              selected={checkTag('React')}
            />
            <Tag
              tagName='Add'
              selectTag={selectTag}
              selected={checkTag('Add')}
            />
          </div>
          <div>
            <select
              className='task_status'
              name='status'
              onChange={handleChange}
              value={taskData.status}
            >
              <option value='todo'>To do</option>
              <option value='ongoing'>On going</option>
              <option value='done'>Done</option>
            </select>

            <button type='submit' className='task_submit'>
              + Add task
            </button>
          </div>
        </div>
      </form>
    </header>
  )
}
TaskForm.propTypes = {
  setTasks: Proptypes.func.isRequired
}
export default TaskForm
