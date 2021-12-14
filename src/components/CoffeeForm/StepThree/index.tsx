import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleBack: () => void
}

const StepThree: FC<Props> = ({ savedValues, handleBack }) => {
  return <div></div>
}

export default StepThree
