import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import Context from '../Context'

import './index.css'
import {Card, Thumbnail, VideoContent, Name, Para} from './styledcomponents'

const GameVideoCard = props => (
  <Context.Consumer>
    {value => {
      const {darkTheme, changeMenu} = value
      const {details} = props
      const {id, thumbnailUrl, title, viewCount} = details
      return (
        <Card>
          <Link
            to={`/videos/${id}`}
            className="link"
            onClick={() => changeMenu('INITIAL')}
          >
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />

            <VideoContent>
              <Para darkTheme={darkTheme}>{title}</Para>
              <Name darkTheme={darkTheme}>{viewCount} Watching Worldwide</Name>
            </VideoContent>
          </Link>
        </Card>
      )
    }}
  </Context.Consumer>
)

export default GameVideoCard
