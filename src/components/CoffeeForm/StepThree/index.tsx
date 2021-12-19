import React, { FC } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."
import OffenSend from "../OffenSend"

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
}

let offenSendObj = ["Every week", "Every 2 weeks", "Every 4 weeks"]

const StepThree: FC<Props> = ({ savedValues }) => {
  return (
    <div className="py-12">
      <Formik
        initialValues={{
          offenSend: savedValues[0].offenSend,
        }}
        validationSchema={yup.object({
          offenSend: yup.string().required("How often should we send it?"),
        })}
        onSubmit={values => {
          savedValues[1]({
            ...savedValues[0],
            offenSend: values.offenSend,
          })
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8 isXs:px-4">
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

            {formik.values.offenSend !== "" ? (
              <div className="w-1/2 my-0 mx-auto isSm:w-full">
                <div className="flex flex-col gap-y-2 items-center pb-8 isSm:px-8 ">
                  {savedValues[0].type.map((v, i) => (
                    <div className="flex w-full" key={i}>
                      <div className="flex-grow">
                        <p className="text-para">
                          {v.coffeeType} <b>x{v.quantity}</b>
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">${v.quantity * 12}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex w-full">
                    <div className="flex-grow">
                      <p className="text-para">Delivery</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase">
                        {formik.values.offenSend}
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
                        <del>
                          $
                          {savedValues[0].type.reduce(
                            (total: number, v) => total + 12 * v.quantity,
                            0
                          )}
                        </del>{" "}
                        $0.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-auto isSm:w-[90%] isSm:px-8 pb-8">
                  <p className="text-para">
                    Your 7-day free trial starts when coffee is delivered, then
                    we will charge you{" "}
                    <b>
                      $
                      {savedValues[0].type.reduce(
                        (total: number, v) => total + 12 * v.quantity,
                        0
                      )}
                      /mo
                    </b>{" "}
                    thereafter. You can cancel anytime.
                  </p>
                </div>
                <div className="text-center isSm:px-8">
                  <button
                    type="submit"
                    className={`h-12  w-44 isSm:w-full capitalize bg-black text-white border-none cursor-pointer`}
                    style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)" }}
                  >
                    start free trial
                  </button>
                </div>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepThree
