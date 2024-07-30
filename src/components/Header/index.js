import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

import Popup from 'reactjs-popup'

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

const Header = props => (
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
      const popupThemeBgColor = darkTheme ? '#212121' : '#ffffff'
      const cancelBtn = darkTheme
        ? {color: '#ffffff', border: '1px solid #ffffff'}
        : null
      const popupPara = darkTheme ? {color: '#ffffff'} : null

      const onLogOut = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

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

              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button popup-btn">
                    <button type="button" className="trigger-button">
                      Logout
                    </button>

                    <button type="button" className="trigger-button">
                      <FiLogOut />
                    </button>
                  </button>
                }
              >
                {close => (
                  <div
                    className="popup-content"
                    style={{backgroundColor: `${popupThemeBgColor}`}}
                  >
                    <p className="popup-para" style={popupPara}>
                      Are you sure you want to logout?
                    </p>
                    <div className="popup-btn-box">
                      <button
                        type="button"
                        className="trigger-button popup-cancel"
                        onClick={() => close()}
                        style={cancelBtn}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        className="popup-confirm"
                        onClick={onLogOut}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </IconsBox>
          </HeaderBg>
        </>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
