import React, { FC } from "react"

interface Props {
  text: string
  isSelected: boolean
  setText: (text: string) => void
}

const OffenSend: FC<Props> = ({ isSelected, text, setText }) => {
  return (
    <>
      <div
        className={`text-center border-[1px] border-solid border-black cursor-pointer h-60 w-48 px-4 flex justify-center isSm:w-full isSm:h-40 ${
          isSelected ? "bg-white" : "bg-transparent"
        }`}
        style={{ boxShadow: "0px 4px 12px rgba(171, 100, 62, 0.2)" }}
        onClick={() => {
          setText(text)
        }}
      >
        <div className="flex items-center">
          <div>
            <h2 className="uppercase isSm:text-lg">{text}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default OffenSend
