import '../assets/css/TaskCard.css'
import Tag from './Tag'
import PropTypes from 'prop-types'
import Delete from '../assets/img/trash-bins.png'
const TaskCard = ({ title, tags, handleRemove, index, setActiveCard }) => {
  return (
    <article
      className='task_card'
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>

        <div className='task_delete' onClick={() => handleRemove(index)}>
          <img src={Delete} className='delete_icon' alt='Delete' />
        </div>
      </div>
    </article>
  )
}
TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setActiveCard: PropTypes.func.isRequired
}
export default TaskCard
