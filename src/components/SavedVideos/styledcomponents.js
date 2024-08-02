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
  background-color: ${props => (props.darkTheme ? '#090909' : '#f9f9f9')};

  width: 85%;
  @media screen and (min-width: 992px) {
    width: 95%;
  }
  flex-grow: 1;
  height: 90vh;
  overflow: auto;
`

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 5%;

  background-color: ${props => (props.darkTheme ? '#181818' : '#f4f4f4')};
`

export const HeadingLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 3%;
  @media screen and (min-width: 992px) {
    padding: 20px;
  }

  background-color: ${props => (props.darkTheme ? '#090909' : '#e2e8f0')};
`
export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#0f0f0f')};
  margin-left: 10px;
  font-size: x-large;
`
export const FailureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const FailureImg = styled.img`
  width: 90%;
  max-width: 500px;
`

export const FailureH1 = styled.h1`
  font-size: large;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const FailurePara = styled.p`
  font-size: small;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  max-width: 350px;
  text-align: center;
  margin-top: 0px;
`

export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  padding-top: 0px;
`
