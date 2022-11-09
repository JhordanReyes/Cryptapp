import React from 'react'
import "./style.css"

const Elemento = ({ name, image, price, abreviado }) => {
  return (
    <div className='elemento'>
      <img src={image} alt={name} title={name} />
      <div className='elemento__div'>
        <div>
          <h3>{name}</h3>
          <p>{abreviado}</p>
        </div>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Elemento