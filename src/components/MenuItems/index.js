import {Link, withRouter} from 'react-router-dom'
import {useContext} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'

import Context from '../Context'
import './index.css'
import {MenuList, Menu, Para} from './syledcomponents'

const menuConstaints = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const menuPath = {
  '/': 'HOME',
  '/trending': 'TRENDING',
  '/gaming': 'GAMING',
  '/saved-videos': 'SAVED_VIDEOS',
}

const MenuItems = () => {
  const context = useContext(Context)

  const {activeMenu, changeMenu} = context

  return (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value
        const iconColor = darkTheme ? '#424242' : '#7e858e'
        const iconActive = '#ff0b37'

        return (
          <MenuList>
            <Link
              to="/"
              className="link"
              onClick={() => changeMenu(menuConstaints.home)}
            >
              <Menu
                isActive={activeMenu === menuConstaints.home}
                key={menuConstaints.home}
                darkTheme={darkTheme}
              >
                <AiFillHome
                  className="icon"
                  color={
                    activeMenu === menuConstaints.home ? iconActive : iconColor
                  }
                />
                <Para
                  isActive={activeMenu === menuConstaints.home}
                  darkTheme={darkTheme}
                >
                  Home
                </Para>
              </Menu>
            </Link>

            <Link
              to="/trending"
              className="link"
              onClick={() => changeMenu(menuConstaints.trending)}
            >
              <Menu
                isActive={activeMenu === menuConstaints.trending}
                key={menuConstaints.trending}
                darkTheme={darkTheme}
              >
                <HiFire
                  className="icon"
                  color={
                    activeMenu === menuConstaints.trending
                      ? iconActive
                      : iconColor
                  }
                />
                <Para
                  isActive={activeMenu === menuConstaints.trending}
                  darkTheme={darkTheme}
                >
                  Trending
                </Para>
              </Menu>
            </Link>

            <Link
              to="/gaming"
              className="link"
              onClick={() => changeMenu(menuConstaints.gaming)}
            >
              <Menu
                isActive={activeMenu === menuConstaints.gaming}
                key={menuConstaints.gaming}
                darkTheme={darkTheme}
              >
                <SiYoutubegaming
                  className="icon"
                  color={
                    activeMenu === menuConstaints.gaming
                      ? iconActive
                      : iconColor
                  }
                />
                <Para
                  isActive={activeMenu === menuConstaints.gaming}
                  darkTheme={darkTheme}
                >
                  Gaming
                </Para>
              </Menu>
            </Link>

            <Link
              to="/saved-videos"
              className="link"
              onClick={() => changeMenu(menuConstaints.savedVideos)}
            >
              <Menu
                isActive={activeMenu === menuConstaints.savedVideos}
                key={menuConstaints.savedVideos}
                darkTheme={darkTheme}
              >
                <MdPlaylistAdd
                  className="icon"
                  color={
                    activeMenu === menuConstaints.savedVideos
                      ? iconActive
                      : iconColor
                  }
                />
                <Para
                  isActive={activeMenu === menuConstaints.savedVideos}
                  darkTheme={darkTheme}
                >
                  Saved videos
                </Para>
              </Menu>
            </Link>
          </MenuList>
        )
      }}
    </Context.Consumer>
  )
}
export default withRouter(MenuItems)
