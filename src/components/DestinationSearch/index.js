// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from './components/DestinationItem'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
  },
]

class DestinationSearch extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <input type="search" placeholder="search" />
          <div>
            <DestinationItem props={destinationsList[0]} />
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
