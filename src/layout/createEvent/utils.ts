//types
import { Page } from 'src/types/navigation'

interface Progress {
  stepsForm: Page[]
  currentStepUrl: string
}

const getProgress = ({ stepsForm, currentStepUrl }: Progress): number => {
  const numberOfPages = stepsForm.length
  const currentStep = stepsForm.find((step) => currentStepUrl === step.path)
  return ((currentStep.stepNumber + 1) / numberOfPages) * 100
}

const getNextStep = ({ stepsForm, currentStepUrl }: Progress): string => {
  const currentStep = stepsForm.find((step) => currentStepUrl === step.path)
  return stepsForm.find((step) => step.stepNumber === currentStep.stepNumber + 1).url
}

export { getProgress, getNextStep }
