import {Component} from 'react'
import Cookies from 'js-cookie'
import Context from '../Context'
import {
  LoginMainContainer,
  LoginForm,
  LogoBox,
  Logo,
  Input,
  CheckBoxInput,
  Label,
  LoginBox,
  LoginBtn,
  ErrorMsg,
} from './styledcomponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordVisible: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {password, username} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({
        errorMsg: data.error_msg,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangePasswordVisible = () => {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible,
    }))
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {passwordVisible, errorMsg} = this.state
          const lightlogo =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer>
              <LoginForm onSubmit={this.onSubmitForm}>
                <LogoBox>
                  <Logo src={lightlogo} alt="logo" />
                </LogoBox>

                <LoginBox direction="column">
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </LoginBox>

                <LoginBox direction="column">
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </LoginBox>

                <LoginBox align="center">
                  <CheckBoxInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangePasswordVisible}
                  />
                  <Label
                    htmlFor="checkbox"
                    size="medium"
                    color="#1e293b"
                    fweight="500"
                  >
                    Show Password
                  </Label>
                </LoginBox>

                <LoginBtn type="submit" onClick={this.onSubmitForm}>
                  Login
                </LoginBtn>

                {errorMsg !== '' ? <ErrorMsg>*hi</ErrorMsg> : null}
              </LoginForm>
            </LoginMainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
