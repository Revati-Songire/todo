import React from 'react'

function Tododisplay(prop) {
  return (
    <div>
        <li>{prop.item}
        <i className="fa-solid fa-trash" onClick={()=>prop.deletetodo(prop.i)}></i>
        </li>
    </div>
  )
}

export default Tododisplay