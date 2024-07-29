import {Component} from 'react'
import './index.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoReorderThree} from 'react-icons/io5'

import {
  HeaderBg,
  IconsBox,
  Logo,
  ProfileImg,
  Button,
  ThemeBtn,
  SmScreenButton,
} from './styledcomponents'
import Context from '../Context'

class Header extends Component {
  state = {}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {darkTheme, toggleTheme} = value
          const profile =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
          const logo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const changeTheme = () => {
            toggleTheme()
          }
          const Bg = darkTheme ? '#181818' : '#f9f9f9'

          const logOutBtnColor = darkTheme ? '#ffffff' : '#3b82f6'

          return (
            <>
              <HeaderBg bg={Bg}>
                <Logo src={logo} />
                <IconsBox>
                  <ThemeBtn
                    onClick={changeTheme}
                    color={darkTheme ? '#ffffff' : null}
                  >
                    {darkTheme ? <FiSun /> : <FaMoon />}
                  </ThemeBtn>

                  <ProfileImg src={profile} />

                  <SmScreenButton
                    type="button"
                    color={darkTheme ? '#ffffff' : null}
                    pt="10px"
                  >
                    <IoReorderThree />
                  </SmScreenButton>

                  <div className="popup-container">
                    <Popup
                      modal
                      trigger={
                        <button
                          type="button"
                          className="trigger-button popup-btn"
                        >
                          <Button
                            type="button"
                            color={darkTheme ? '#ffffff' : '#3b82f6'}
                          >
                            Logout
                          </Button>

                          <SmScreenButton
                            type="button"
                            color={darkTheme ? '#ffffff' : null}
                            size="30px"
                          >
                            <FiLogOut />
                          </SmScreenButton>
                        </button>
                      }
                    >
                      {close => (
                        <>
                          <div>
                            <p>
                              React is a popular and widely used programming
                              language
                            </p>
                          </div>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                        </>
                      )}
                    </Popup>
                  </div>
                </IconsBox>
              </HeaderBg>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Header
