import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleNext: () => void
  handleBack: () => void
}

const StepTwo: FC<Props> = ({ savedValues, handleNext, handleBack }) => {
  return <div></div>
}

export default StepTwo
