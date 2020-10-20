import React from 'react'

import { ContainerButton } from './style'

type MainButtonProps = {
  text: string
  onClickButton: (event: React.MouseEvent<HTMLElement>) => void
  typeButton: string
  secondary: boolean
}

const MainButton = ({
  text,
  onClickButton,
  typeButton,
  secondary,
}: MainButtonProps): JSX.Element => {
  return (
    <>
      {typeButton === 'submit' ? (
        <ContainerButton secondary={secondary} type="submit" onClick={onClickButton}>
          {text}
        </ContainerButton>
      ) : (
        <ContainerButton secondary={secondary} type="button" onClick={onClickButton}>
          {text}
        </ContainerButton>
      )}
    </>
  )
}

export default MainButton
