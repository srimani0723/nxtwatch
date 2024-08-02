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
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};

  flex-grow: 1;
  height: 90vh;
  padding: 20px;
  font-family: 'Roboto';
`

export const Para = styled.p``

export const VideoTitle = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-size: medium;
  font-weight: 500;
`

export const Name = styled.p`
  font-size: small;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;

  color: ${props => (props.darkTheme ? ' #606060' : ' #606060')};
  @media screen and (min-width: 768px) {
    font-size: medium;
  }
`

export const VideoAction = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`
export const ActionBox = styled.div`
  display: flex;
  align-items: align;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};

  background: transparent;
  border: 0px;
  cursor: pointer;

  color: #64748b;
  font-size: 15px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    padding: 0px;
    margin-right: 15px;
  }
`
export const ChannelBox = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const ChannelLogo = styled.img`
  width: 10%;
  max-width: 50px;

  margin-top: 10px;
`

export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const ChannelDes = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#424242')};
  font-size: medium;
  font-weight: 500;

  @media screen and (max-width: 576px) {
    display: none;
  }

  @media screen and (min-width: 576px) {
    display: block;
  }
`

export const ChannelDesSm = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#424242')};
  font-size: medium;
  font-weight: 500;

  @media screen and (max-width: 576px) {
    display: block;
  }

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const FailureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`
export const FailureImg = styled.img`
  width: 90%;
  max-width: 350px;
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

export const FailureBtn = styled.button`
  border: 0px;
  padding: 10px 25px;
  width: 100px;
  color: #f9f9f9;
  font-weight: 500;
  font-size: small;
  font-family: 'Roboto';
  border-radius: 5px;
  background-color: #4f46e5;
  cursor: pointer;
`

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`
export const PlayerBox = styled.div`
  width: 100%;

  height: 70%;
  @media screen and (max-width: 576px) {
    height: 300px;
  }

  @media screen and (min-width: 576px) and (max-width: 992px) {
    height: 360px;
  }
`
