import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import Context from '../Context'

import './index.css'
import {
  Card,
  Thumbnail,
  VideoContent,
  Name,
  Para,
  DataBox,
  Layout,
  Content,
  ThumbLogo,
  Info,
} from './styledcomponents'

const TrendingVideoCard = props => (
  <Context.Consumer>
    {value => {
      const {darkTheme, changeMenu} = value
      const {details} = props
      const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
      const {name, profileImageUrl} = channel
      const date = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1, 3)
        .join(' ')

      return (
        <Card>
          <Link
            to={`/videos/${id}`}
            className="link"
            onClick={() => changeMenu('INITIAL')}
          >
            <Layout>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Content>
                <ThumbLogo src={profileImageUrl} />
                <VideoContent>
                  <Para darkTheme={darkTheme}>{title}</Para>
                  <Info>
                    <Name darkTheme={darkTheme}>{name}</Name>
                    <BsDot size={20} className="dot dotsm" color="#64748b" />
                    <DataBox>
                      <Name darkTheme={darkTheme}>{viewCount} views</Name>
                      <BsDot size={20} className="dot" color="#64748b" />
                      <Name darkTheme={darkTheme}>{date} ago</Name>
                    </DataBox>
                  </Info>
                </VideoContent>
              </Content>
            </Layout>
          </Link>
        </Card>
      )
    }}
  </Context.Consumer>
)

export default TrendingVideoCard
