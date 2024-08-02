import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${props => props.bg};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px ${props => props.shadow};
  background-color: ${props => props.bg};

  @media screen and (max-width: 576px) {
    margin: 5%;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
`

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 40px;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.align ? props.align : null)};
  margin-top: ${props => (props.mtop ? props.mtop : '10px')};
  margin-bottom: 10px;
`

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #94a3b8;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  font-size: medium;
  color: ${props => (props.darkTheme ? '#f4f4f4' : null)};
  background-color: ${props => props.bg};
`

export const CheckBoxInput = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
`

export const Label = styled.label`
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#64748b')};
  font-size: ${props => (props.size ? props.size : 'small')};
  font-weight: ${props => (props.fweight ? props.fweight : 'bold')};
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0px;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: medium;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-weight: 500;
  margin: 0px;
`
