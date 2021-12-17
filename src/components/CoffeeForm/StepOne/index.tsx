import React, { FC, useState } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { IValues } from ".."
import CoffeeType from "../CoffeeType"
import Button from "../../Button"

interface Props {
  savedValues: [IValues, React.Dispatch<React.SetStateAction<IValues>>]
  handleNext: () => void
}

let coffeeTypeObj = [
  {
    type: "Light Roast",
    description: "Lorem ipsum dolor sit amet.",
    image: "light-roast.png",
  },
  {
    type: "Medium Roast",
    description: "Lorem ipsum dolor sit amet.",
    image: "medium-roast.png",
  },
  {
    type: "Dark Roast",
    description: "Lorem ipsum dolor sit amet.",
    image: "dark-roast.png",
  },
  {
    type: "Decaf",
    description: "Lorem ipsum dolor sit amet.",
    image: "decaf.png",
  },
]

const StepOne: FC<Props> = ({ savedValues, handleNext }) => {

  return (
    <div>
      <Formik
        initialValues={{
          coffeeType: savedValues[0].coffeeType,
          quantity: savedValues[0].quantity,
        }}
        validationSchema={yup.object({
          coffeeType: yup.string().required("Please Select Preference"),
          quantity: yup.number().min(1, "Quantity cannot be less than 1"),
        })}
        onSubmit={values => {
          console.log(values)
          savedValues[1]({
            ...savedValues[0],
            coffeeType: values.coffeeType,
            quantity: values.quantity,
          })
          handleNext()
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8">
              {coffeeTypeObj.map((v, i) => {
                const isSelected = v.type === formik.values.coffeeType
                return (
                  <CoffeeType
                    coffeeType={v.type}
                    description={v.description}
                    imageSrc={v.image}
                    setQuantity={(quantity: number) => {
                      formik.setFieldValue("quantity", quantity)
                    }}
                    quantity={formik.values.quantity}
                    setCoffeeType={(coffeeType: string) => {
                      formik.setFieldValue("coffeeType", coffeeType)
                    }}
                    isSelected={isSelected}
                    key={i}
                  />
                )
              })}
            </div>
            {formik.values.coffeeType === "" ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.coffeeType}
              </div>
            ) : null}
            {formik.values.quantity < 1 ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.quantity}
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

export default StepOne
