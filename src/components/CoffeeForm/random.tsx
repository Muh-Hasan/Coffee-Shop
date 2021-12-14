import React, { useState } from "react"

const Random = ({ val , onSelected, isSelected }) => {
  let [selectType, setType] = useState("")
  let [quantity, setQuantity] = useState(0)

  console.log(isSelected)
  console.log(selectType)
  console.log(quantity)
  return (
    <>
      {!isSelected ? (
        <div onClick={() => onSelected(val) }>
          <div>
            <img src="/images/decaf.png" />
          </div>
          <div>
            <h2>decaf</h2>
          </div>
          <div>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
          </div>
        </div>
      ) : (
        <div>
          <div>decaf</div>
          <div>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            {quantity}
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Random
