import React, { FC, useState } from "react"
import StepOne from "./StepOne"
import StepThree from "./StepThree"
import StepTwo from "./StepTwo"

export interface IValues {
  type: { coffeeType: string; quantity: number }[]
  offenSend: string
  grindType: string
}

const getSteps = () => {
  return [
    "Select your preference",
    "Grind type",
    "How often should we send it?",
  ]
}

const CoffeeForm: FC = () => {
  const savedValues = useState<IValues>({
    type: [],
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
        return <StepTwo savedValues={savedValues} handleNext={handleNext} />
      case 2:
        return <StepThree savedValues={savedValues} />
      default:
        return "ERROR"
    }
  }

  return (
    <div
      className={`min-h-screen flex items-center bg-form ${
        activeStep === 2 ? "py-12" : ""
      } isLgMax:py-0`}
    >
      <div className="w-full isLgMax:py-16">
        {activeStep > 0 ? (
          <div
            className="flex items-center gap-2 pl-4 pb-6 cursor-pointer"
            onClick={() => handleBack()}
          >
            <div>
              <img src="/images/rightArrow.png" alt="rightArrow" />
            </div>
            <div className="-mt-[5px]">
              <p className="text-para isSm:text-xs">Back</p>
            </div>
          </div>
        ) : null}

        <div className="my-0 mx-auto">
          <div className="flex justify-center items-center">
            <div className="isSm:w-full">
              <div>
                <div className="text-center mb-4">
                  <p className="text-para text-lg isSm:text-xs">
                    {activeStep + 1} of 3
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-5xl uppercase font-semibold isSm:text-2xl">
                    {getSteps()[activeStep]}
                  </h2>
                </div>
              </div>
              <div>{getStepContent(activeStep)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeForm
