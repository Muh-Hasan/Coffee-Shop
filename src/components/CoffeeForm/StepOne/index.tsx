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
          type: savedValues[0].type,
        }}
        // validationSchema={yup.object({
        //   coffeeType: yup.string().required("Please Select Preference"),
        //   quantity: yup.number().min(1, "Quantity cannot be less than 1"),
        // })}
        onSubmit={values => {
          console.log(values)
          savedValues[1]({
            ...savedValues[0],
            type: values.type,
          })
          handleNext()
        }}
      >
        {formik => (
          <Form>
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8">
              {coffeeTypeObj.map((v, i) => {
                // console.log(formik.values.type)
                const index = (formik.values.type || []).findIndex(
                  elem => v.type === elem.coffeeType && elem.quantity !== 0
                )
                console.log(index)

                const isSelected = index !== -1
                return (
                  <CoffeeType
                    coffeeType={v.type}
                    description={v.description}
                    imageSrc={v.image}
                    setQuantity={(quantity: number) => {
                      const idx = formik.values.type.findIndex(
                        elm => elm.coffeeType === v.type
                      )
                      if (idx !== -1) {
                        const value = formik.values.type
                        if (value[idx].quantity === 0) {
                          delete value[idx]
                        } else {
                          value[idx].quantity = quantity
                          formik.setFieldValue("type", value)
                        }
                      }
                    }}
                    quantity={formik.values.type[index]?.quantity}
                    setCoffeeType={(coffeeType: string) => {
                      let value = []
                      if (
                        (formik.values.type || []).findIndex(
                          elem => v.type === elem.coffeeType
                        ) !== -1
                      ) {
                        value = formik.values.type.filter(
                          elem => elem.coffeeType !== v.type
                        )
                      } else {
                        value = [
                          ...formik.values.type,
                          { coffeeType, quantity: 1 },
                        ]
                      }
                      formik.setFieldValue("type", value)
                    }}
                    isSelected={isSelected}
                    key={i}
                  />
                )
              })}
            </div>
            {/* {formik.values.coffeeType === "" ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.coffeeType}
              </div>
            ) : null}
            {formik.values.quantity < 1 ? (
              <div className="text-sm text-red-600 mt-1 text-center pb-4">
                {formik.errors.quantity}
              </div>
            ) : null} */}
            {console.log(formik.values.type)}
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
