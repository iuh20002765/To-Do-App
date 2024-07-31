import '../assets/css/TaskColumn.css'
import Proptypes from 'prop-types'
import TaskCard from './TaskCard'
import DropArea from './DropArea'
import React from 'react'

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleRemove,
  setActiveCard,
  onDrop
}) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_header'>
        <img className='task_column_icon' src={icon} alt='ToDo' />
        {title}
      </h2>

      <DropArea onDrop={() => onDrop(status, 0)} />

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleRemove={handleRemove}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  )
}
TaskColumn.propTypes = {
  icon: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  tasks: Proptypes.arrayOf(Proptypes.shape({})),
  status: Proptypes.oneOf(['todo', 'ongoing', 'done']).isRequired,
  handleRemove: Proptypes.func.isRequired,
  setActiveCard: Proptypes.func.isRequired,
  onDrop: Proptypes.func.isRequired
}
export default TaskColumn
