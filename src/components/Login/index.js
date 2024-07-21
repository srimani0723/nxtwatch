import {Component} from 'react'

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
} from './styledcomponents'

class Login extends Component {
  state = {}

  render() {
    const lightlogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <LoginMainContainer>
        <LoginForm>
          <LogoBox>
            <Logo src={lightlogo} alt="logo" />
          </LogoBox>

          <LoginBox direction="column">
            <Label htmlFor="username">USERNAME</Label>
            <Input type="text" id="username" placeholder="Username" />
          </LoginBox>

          <LoginBox direction="column">
            <Label htmlFor="password">PASSWORD</Label>
            <Input type="password" id="password" placeholder="Password" />
          </LoginBox>

          <LoginBox>
            <CheckBoxInput type="checkbox" id="checkbox" />
            <Label htmlFor="checkbox">Show Password</Label>
          </LoginBox>

          <LoginBtn type="submit">Login</LoginBtn>
        </LoginForm>
      </LoginMainContainer>
    )
  }
}

export default Login
