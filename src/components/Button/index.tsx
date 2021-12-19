import React, { FC } from "react"

interface Props {
  text: string
  backgroundColor: "bg-black" | "bg-white"
  type: "submit" | "button"
}

const Button: FC<Props> = ({ text, backgroundColor, type }) => {
  return (
    <button
      className={`h-12 w-44 capitalize ${backgroundColor} text-${
        backgroundColor === "bg-black" ? "white" : "black"
      } border-none cursor-pointer`}
      style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)"}}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
