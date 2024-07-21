import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`

export const Logo = styled.img`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.align ? props.align : null)};
  justify-content: ${props => (props.content ? props.content : null)};
  margin: 10px;
`

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 0px;
`

export const CheckBoxInput = styled.input``

export const Label = styled.label``

export const LoginBtn = styled.button``
