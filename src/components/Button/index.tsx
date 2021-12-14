import React, { FC } from "react"

interface Props {
  text: string
  backgroundColor: "bg-black" | "bg-white"
  type?: "submit"
}

const Button: FC<Props> = ({ text, backgroundColor, type }) => {
  return (
    <button
    type={type}
      className={`h-12 w-44 capitalize ${backgroundColor} text-${
        backgroundColor === "bg-black" ? "white" : "black"
      } border-none cursor-pointer`}
      style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)" }}
    >
      {text}
    </button>
  )
}

export default Button
