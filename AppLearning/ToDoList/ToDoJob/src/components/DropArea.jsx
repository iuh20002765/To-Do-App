import { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/DropArea.css'

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false)
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? 'drop_area' : 'hide_drop'}
      onDrop={() => {
        onDrop()
        setShowDrop(false)
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop here
    </section>
  )
}
DropArea.propTypes = {
  onDrop: PropTypes.func.isRequired
}
export default DropArea
