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
  background-color: skyblue;
  width: 85%;
  @media screen and (min-width: 992px) {
    width: 95%;
  }
  flex-grow: 1;
  height: 90vh;
`

export const Para = styled.p``
