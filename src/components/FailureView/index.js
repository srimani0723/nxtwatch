import Context from '../Context'

import {
  FailureBox,
  FailureBtn,
  FailureH1,
  FailureImg,
  FailurePara,
} from './styledcomponents'

const FailureView = props => {
  const {retry} = props

  const onRetry = () => {
    retry()
  }

  return (
    <Context.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureBox>
            <FailureImg src={failureImg} alt="failure view" />
            <FailureH1 darkTheme={darkTheme}>
              Oops! Something Went Wrong
            </FailureH1>
            <FailurePara darkTheme={darkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <FailureBtn type="button" onClick={onRetry}>
              Retry
            </FailureBtn>
          </FailureBox>
        )
      }}
    </Context.Consumer>
  )
}
export default FailureView
