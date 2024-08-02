import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoReorderThree, IoClose} from 'react-icons/io5'
import MenuItems from '../MenuItems'

import './index.css'
import {
  HeaderBg,
  IconsBox,
  Logo,
  ProfileImg,
  ThemeBtn,
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
          const Bg = darkTheme ? '#212121' : '#ffffff'
          const popupThemeBgColor = darkTheme ? '#212121' : '#ffffff'
          const cancelBtn = darkTheme
            ? {color: '#ffffff', border: '1px solid #ffffff'}
            : null
          const logoutBtnPara = darkTheme
            ? {color: '#ffffff', border: '1px solid #ffffff'}
            : {color: '#3b82f6', border: '1px solid #3b82f6'}

          const onLogOut = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <>
              <HeaderBg bg={Bg}>
                <Link to="/" className="link">
                  <Logo src={logo} alt="website logo" />
                </Link>
                <IconsBox>
                  <ThemeBtn
                    onClick={changeTheme}
                    data-testid="theme"
                    color={darkTheme ? '#ffffff' : null}
                  >
                    {darkTheme ? <FiSun /> : <FaMoon />}
                  </ThemeBtn>

                  <ProfileImg src={profile} alt="profile" />

                  <div className="popup-options">
                    <Popup
                      modal
                      className="options"
                      trigger={
                        <button
                          type="button"
                          style={{
                            color: darkTheme ? '#ffffff' : null,
                            paddingTop: '10px',
                          }}
                          aria-label="close"
                          className="options-btn trigger-button"
                        >
                          <IoReorderThree />
                        </button>
                      }
                    >
                      {close => (
                        <div
                          className="options-content"
                          style={{backgroundColor: `${popupThemeBgColor}`}}
                        >
                          <div className="options-close-btn-box">
                            <button
                              type="button"
                              aria-label="close"
                              onClick={() => close()}
                              className="options-close-btn"
                              style={{color: darkTheme ? '#ffffff' : null}}
                            >
                              <IoClose />
                            </button>
                          </div>

                          <div className="menu-items-box">
                            <MenuItems className="menu-items" />
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>

                  <Popup
                    modal
                    className="popup-logout"
                    trigger={
                      <button
                        type="button"
                        className="trigger-button logout-btn pop-sm"
                        aria-label="close"
                      >
                        <FiLogOut
                          className="logout-btn-logo"
                          style={{color: darkTheme ? '#ffffff' : '#000000'}}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <div
                        className="popup-logout-content "
                        style={{backgroundColor: `${popupThemeBgColor}`}}
                      >
                        <p
                          className="popup-para"
                          style={{color: darkTheme ? '#ffffff' : '#00306e'}}
                        >
                          Are you sure, you want to logout
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

                  <Popup
                    modal
                    className="popup-logout"
                    trigger={
                      <button
                        type="button"
                        className="trigger-button logout-btn logout-btn-para pop-lg"
                        style={logoutBtnPara}
                      >
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <div
                        className="popup-logout-content "
                        style={{backgroundColor: `${popupThemeBgColor}`}}
                      >
                        <p
                          className="popup-para"
                          style={{color: darkTheme ? '#ffffff' : '#00306e'}}
                        >
                          Are you sure, you want to logout
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
  }
}

export default withRouter(Header)
