import React, { FC, useState } from "react"

interface Props {
  setCoffeeType: React.Dispatch<React.SetStateAction<string>>
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  isSelected: boolean
  coffeeType: string
  description: string
  quantity: number
  imageSrc: string
}

const CoffeeType: FC<Props> = ({
  isSelected,
  setCoffeeType,
  setQuantity,
  coffeeType,
  description,
  quantity,
  imageSrc,
}) => {
  return (
    <div
      className={`text-center border-[1px] border-solid border-black cursor-pointer px-4 h-60 flex items-center ${
        isSelected ? "bg-white" : "bg-transparent"
      }`}
      style={{ boxShadow: "0px 4px 12px rgba(171, 100, 62, 0.2)" }}
    >
      {!isSelected ? (
        <div
          onClick={() => {
            setCoffeeType(coffeeType)
            setQuantity(0)
          }}
        >
          <div>
            <img src={`/images/${imageSrc}`} alt={coffeeType} />
          </div>
          <div>
            <h2 className="uppercase">{coffeeType}</h2>
          </div>
          <div>
            <p className="text-sm text-para">{description}</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2 className="uppercase">{coffeeType}</h2>
          </div>
          <div className="mt-8">
            <p className="text-sm text-para">How many 12oz bags?</p>
          </div>
          <div>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            {quantity}
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CoffeeType
