// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <div>
      <img src={imgUrl} className="imgUrl" />
      <p>name</p>
    </div>
  )
}

export default DestinationItem
