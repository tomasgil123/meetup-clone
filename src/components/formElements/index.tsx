import styled from 'styled-components'
import { space, colors, breakpoints, boxShadow } from 'src/tokens'

const ContainerInput = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding-top: ${space.s16};
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: ${space.s24};
  }
`

const Title = styled.h2`
  color: ${colors.text.primary};
  font-weight: 600;
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

const LabelElement = styled.label`
  font-size: ${space.s4};
  font-weight: 500;
  width: 100%;
  display: block;
  color: ${colors.text.primary};
  margin-bottom: ${space.s2};
`

type InputElementProps = {
  error: string
}

const InputElement = styled.div`
  input {
    width: 100%;
    font-size: ${space.s4};
    color: ${colors.text.primary};
    border-width: 1px !important;
    border: 0 solid
      ${(props: InputElementProps): string =>
        props.error ? `${colors.text.error}` : `${colors.base.borders}`};
    outline: none !important;
    border-radius: 4px;
    height: ${space.s12};
    box-shadow: ${boxShadow.shadow};
    padding-left: ${space.s2};
    &:focus {
      outline: none !important;
      border: 1px solid ${colors.base.primaryBlue};
    }
  }
`
const TextareaElement = styled.textarea`
  width: 100%;
  border-width: 1px !important;
  padding: ${space.s2};
  border: 0 solid
    ${(props: InputElementProps): string =>
      props.error ? `${colors.text.error}` : `${colors.base.borders}`};
  outline: none !important;
  border-radius: 4px;
  box-shadow: ${boxShadow.shadow};
  padding-left: ${space.s2};
  font-family: inherit;
  &:focus {
    outline: none !important;
    border: 1px solid ${colors.base.primaryBlue};
  }
`

const ErrorMessageElement = styled.div`
  padding-top: ${space.s3};
  font-size: ${space.s4};
  color: ${colors.text.error};
`

export {
  ContainerInput,
  Title,
  Subtitle,
  LabelElement,
  InputElement,
  TextareaElement,
  ErrorMessageElement,
}
