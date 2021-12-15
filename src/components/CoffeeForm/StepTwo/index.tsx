import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."
import OffenSend from "../OffenSend"

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleNext: () => void
  handleBack: () => void
}

let offenSendObj = ["Every week", "Every 2 weeks", "Every 4 weeks"]

const StepTwo: FC<Props> = ({ savedValues, handleNext, handleBack }) => {
  return (
    <div>
      <Formik
        initialValues={{
          offenSend: savedValues[0].offenSend,
        }}
        validationSchema={yup.object({
          offenSend: yup.string().required("How often should we send it?"),
        })}
        onSubmit={values => {
          console.log(values)
          savedValues[1]({
            ...savedValues[0],
            offenSend: values.offenSend,
          })
          handleNext()
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap">
              {offenSendObj.map((v, i) => {
                const isSelected = v === formik.values.offenSend
                return (
                  <OffenSend
                    text={v}
                    setText={(offenSend: string) => {
                      formik.setFieldValue("offenSend", offenSend)
                    }}
                    isSelected={isSelected}
                    key={i}
                  />
                )
              })}
            </div>
            {formik.values.offenSend === "" ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.offenSend}
              </div>
            ) : null}
            <div className="text-center">
              <button
                type="submit"
                className={`h-12 w-44 capitalize bg-black text-white border-none cursor-pointer`}
                style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)" }}
              >
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepTwo
