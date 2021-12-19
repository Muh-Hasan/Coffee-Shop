import React, { FC } from "react"

interface Props {
  setCoffeeType: (coffeeType: string) => void
  setQuantity: (quantity: number) => void
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
  console.log(isSelected)

  return (
    <>
      {!isSelected ? (
        <div
          className={`text-center border-[1px] border-solid border-black cursor-pointer h-60 w-48 px-4 flex bg-transparent isSm:w-full isSm:justify-center isSm:h-40`}
          style={{ boxShadow: "0px 4px 12px rgba(171, 100, 62, 0.2)" }}
          onClick={() => setCoffeeType(coffeeType)}
        >
          <div className="flex items-center">
            <div>
              <div>
                <img
                  src={`/images/${imageSrc}`}
                  alt={coffeeType}
                  className="w-8"
                />
              </div>
              <div>
                <h2 className="uppercase isSm:text-lg">{coffeeType}</h2>
              </div>
              <div>
                <p className="text-sm text-para">{description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`text-center border-[1px] border-solid border-black h-60 w-56 flex justify-center bg-white isSm:w-full isSm:h-40`}
          style={{ boxShadow: "0px 4px 12px rgba(171, 100, 62, 0.2)" }}
        >
          <div className="w-full">
            <div className="relative h-full w-full">
              <div className="pt-[30%] isSm:pt-[10%]">
                <div className="pb-10 isSm:pb-2">
                  <h2 className="uppercase">{coffeeType}</h2>
                </div>
                <div className="isSm:pb-4">
                  <p className="text-sm text-para">How many 12oz bags?</p>
                </div>
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="flex bg-[#F1D0AF] py-2 px-2 justify-between items-center">
                  <div>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity - 1)}
                      className="h-8 w-8 border-none text-white bg-black font-medium text-lg cursor-pointer"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{quantity}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 border-none text-white bg-black font-medium text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CoffeeType
