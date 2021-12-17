import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."
import GrindType from "../GrindType"

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleBack: () => void
}

let grindTypeObj = [
  {
    text: "GROUND",
    imageSrc: "ground.png",
  },
  {
    text: "WHOLE BEAN",
    imageSrc: "whole-bean.png",
  },
]

const StepThree: FC<Props> = ({ savedValues, handleBack }) => {
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
          console.log(values)
          savedValues[1]({
            ...savedValues[0],
            grindType: values.grindType,
          })
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8">
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
            {formik.values.grindType !== "" ? (
              <>
                <div className="flex flex-col gap-y-2 items-center pb-8 isSm:px-8 ">
                  <div className="flex w-full">
                    <div className="flex-grow">
                      <p className="text-para">
                        {savedValues[0].coffeeType}{" "}
                        <b>x{savedValues[0].quantity}</b>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">$30</p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex-grow">
                      <p className="text-para">
                        {savedValues[0].coffeeType}{" "}
                        <b>x{savedValues[0].quantity}</b>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">$30</p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex-grow">
                      <p className="text-para">Delivery</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase">
                        {savedValues[0].offenSend}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex-grow">
                      <p className="text-para">Shipping</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase">free</p>
                    </div>
                  </div>
                  <div className="flex w-full py-2 border-y-[1px] border-x-0 border-solid border-[#685959]">
                    <div className="flex-grow">
                      <p className="font-semibold">Today's Price</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase">
                        <del>$60</del> $0.00
                      </p>
                    </div>
                  </div>
                </div>
                  {/* <div className="w-1/2 my-0 mx-auto isSm:w-[90%] isSm:px-8 pb-8">
                    <p className="text-para">
                      Your 7-day free trial starts when coffee is delivered,
                      then we will charge you <b>$60/mo</b> thereafter. You can
                      cancel anytime.
                    </p>
                  </div> */}
                <div className="text-center">
                  <button
                    type="submit"
                    className={`h-12 w-44 capitalize bg-black text-white border-none cursor-pointer`}
                    style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)" }}
                  >
                    start free trial
                  </button>
                </div>
              </>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepThree
