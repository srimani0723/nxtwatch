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

  width: 85%;
  @media screen and (min-width: 992px) {
    width: 95%;
  }
  flex-grow: 1;
  height: 90vh;
  overflow: auto;
`
export const Para = styled.p``

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

export const TrendingImg = styled.img``

export const TrendingH1 = styled.h1``

export const TrendingLi = styled.li`
  padding: 0px;
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
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 10px;
`
