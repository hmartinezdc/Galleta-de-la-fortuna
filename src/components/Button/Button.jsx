import React from 'react'

const Button = ({handleClick, handleClick2 }) => {
  return (
    <button onClick={() => {handleClick(); handleClick2()}}>
        <span>Probar mi suerte</span>
    </button>
  )
}

export default Button