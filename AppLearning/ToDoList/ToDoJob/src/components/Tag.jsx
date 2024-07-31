import '../assets/css/Tag.css'
import PropTypes from 'prop-types'
const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: '#fda821' },
    Java: { backgroundColor: '#15d4c8' },
    React: { backgroundColor: '#ffd12c' },
    Add: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' }
  }
  return (
    <button
      type='button'
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className='tag'
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  )
}
Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  selectTag: PropTypes.func.isRequired,
  selected: PropTypes.bool
}
export default Tag
