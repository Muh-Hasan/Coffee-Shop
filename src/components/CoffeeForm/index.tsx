import React, { FC, useState } from "react"
import StepOne from "./StepOne"
import StepThree from "./StepThree"
import StepTwo from "./StepTwo"

export interface IValues {
  coffeeType: string
  quantity: number
  offenSend: string
  grindType: string
}

const getSteps = () => {
  return [
    "Select your preference",
    "How often should we send it?",
    "How often should we send it?",
  ]
}

const CoffeeForm: FC = () => {
  const savedValues = useState<IValues>({
    coffeeType: "",
    quantity: 0,
    offenSend: "",
    grindType: "",
  })
  console.log(savedValues)

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <StepOne savedValues={savedValues} handleNext={handleNext} />
      case 1:
        return (
          <StepTwo
            savedValues={savedValues}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )
      case 2:
        return <StepThree savedValues={savedValues} handleBack={handleBack} />
      default:
        return "ERROR"
    }
  }

  return (
    <div className="min-h-screen bg-form">
      <div className="flex justify-center items-center py-20">
        <div>
          <div className="text-center mb-4">
            <p className="text-para">{activeStep + 1} of 3 </p>
          </div>
          <div className="uppercase text-3xl mb-8 text-center">
            <h2>{getSteps()[0]} </h2>
          </div>
          <div>{getStepContent(activeStep)}</div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeForm
