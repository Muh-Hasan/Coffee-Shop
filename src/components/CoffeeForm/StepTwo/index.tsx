import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."
import GrindType from "../GrindType"
import Button from "../../Button"

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleNext: () => void
}

let grindTypeObj: { text: string; imageSrc: string }[] = [
  {
    text: "GROUND",
    imageSrc: "ground.png",
  },
  {
    text: "WHOLE BEAN",
    imageSrc: "whole-bean.png",
  },
]

const StepTwo: FC<Props> = ({ savedValues, handleNext }) => {
  return (
    <div>
      <Formik
        initialValues={{
          grindType: savedValues[0].grindType,
        }}
        validationSchema={yup.object({
          grindType: yup.string().required("Grind Type"),
        })}
        onSubmit={values => {
          savedValues[1]({
            ...savedValues[0],
            grindType: values.grindType,
          })
          handleNext()
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8 isXs:px-4">
              {grindTypeObj.map((v, i) => {
                const isSelected = v.text === formik.values.grindType
                return (
                  <GrindType
                    text={v.text}
                    imageSrc={v.imageSrc}
                    setText={(grindType: string) => {
                      formik.setFieldValue("grindType", grindType)
                    }}
                    isSelected={isSelected}
                    key={i}
                  />
                )
              })}
            </div>

            {formik.values.grindType === "" ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.grindType}
              </div>
            ) : null}

            <div className="text-center">
              <Button text="next" backgroundColor="bg-black" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepTwo
