import React, { FC } from "react"

interface Props {
  setText: (text: string) => void
  isSelected: boolean
  text: string
  imageSrc: string
}

const GrindType: FC<Props> = ({ text, imageSrc, setText, isSelected }) => {
  return (
    <>
      <div
        className={`text-center border-[1px] border-solid border-black cursor-pointer h-60 w-48 px-4 flex justify-center isSm:w-full ${
          isSelected ? "bg-white" : "bg-transparent"
        }`}
        style={{ boxShadow: "0px 4px 12px rgba(171, 100, 62, 0.2)" }}
      >
        <div
          className="flex items-center "
          onClick={() => {
            setText(text)
          }}
        >
          <div>
            <div>
              <img src={`/images/${imageSrc}`} alt={text} />
            </div>
            <div>
              <h2 className="uppercase">{text}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GrindType
