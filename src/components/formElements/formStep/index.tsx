import React, { FC, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { SubmitSection, ContainerSubmitButton } from './styles'
import MainButton from 'src/components/button'

interface Props {
  exit: boolean
  onClickButton?: () => void
  withValidation?: boolean
  children: React.ReactNode
}

const FormStep: FC<Props> = ({ exit, onClickButton, children, withValidation = true }) => {
  const [animation, setAnimation] = useState({ x: 0, opacity: 1 })

  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    setAnimation({ x: -300, opacity: 0 })
  }, [exit])

  if (withValidation) {
    return (
      <form
        onSubmit={(e): void => {
          e.preventDefault()
          onClickButton()
        }}
      >
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          exit={{ x: -300, opacity: 0 }}
          animate={animation}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
        <SubmitSection>
          <ContainerSubmitButton>
            <MainButton
              text="Continue"
              onClickButton={undefined}
              typeButton="submit"
              secondary={false}
            />
          </ContainerSubmitButton>
        </SubmitSection>
      </form>
    )
  } else {
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        exit={{ x: -300, opacity: 0 }}
        animate={animation}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  }
}

export default FormStep
