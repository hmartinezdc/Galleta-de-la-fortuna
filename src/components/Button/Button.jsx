import React from 'react'

const Button = ({handleClick}) => {
  return (
    <button 
      onClick={handleClick}>
      {/* onClick={() => {handleClick(); handleClick2()}}> */}
        <span>
          <span>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </span> Probar mi suerte
        </span>
    </button>
  )
}

export default Button