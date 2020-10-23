import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from 'src/tokens/'

//types
interface Props {
  secondary: boolean
}

const LoaderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% {  transform: rotate(360deg) }
`

const LoaderStyles = styled.div<any>`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 4px;
    border: 4px solid
      ${(props: Props): string =>
        props.secondary ? `${colors.base.primaryOrange}` : `${colors.base.white}`};
    border-radius: 50%;
    animation: ${LoaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props: Props): string =>
        props.secondary ? `${colors.base.primaryOrange}` : `${colors.base.white}`}
      transparent transparent transparent;
  }
`

function Loader({ secondary }: Props): JSX.Element {
  return (
    <LoaderStyles secondary={secondary}>
      <div />
      <div style={{ animationDelay: '-0.45s' }} />
      <div style={{ animationDelay: '-0.3s' }} />
      <div style={{ animationDelay: '-0.15s' }} />
    </LoaderStyles>
  )
}

export default Loader
