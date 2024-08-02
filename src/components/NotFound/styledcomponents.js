import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 90vh;
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
  @media screen and (min-width: 992px) {
    width: 95%;
  }
  flex-grow: 1;
  height: 90vh;
  font-family: 'Roboto';
`

export const NotFound = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 90vh;
`

export const Image = styled.img`
  width: 70%;
  max-width: 500px;
`

export const H1 = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const Para = styled.p`
  color: #475569;
  font-size: medium;
  font-weight: 500;
  margin: 0px;
`
