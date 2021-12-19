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

let coffeeTypeObj: { type: string; description: string; image: string }[] = [
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
            <div className="flex items-center gap-6 justify-center py-16 flex-wrap isSm:px-8 isXs:px-4">
              {coffeeTypeObj.map((v, i) => {
                const index = (formik.values.type || []).findIndex(
                  elem => v.type === elem.coffeeType && elem.quantity > 0
                )

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
                        let value = formik.values.type
                        if (quantity < 1) {
                          value = value.filter(e => e.coffeeType !== v.type)
                          formik.setFieldValue("type", value)
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
                        ) === -1
                      ) {
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
            <div className="text-center">
              <Button text="next" backgroundColor="bg-black" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepOne
