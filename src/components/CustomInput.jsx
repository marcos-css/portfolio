import React from 'react'

const CustomInput = ({
  
  type = 'text',
  name = ' ',
  placeholder = 'Jane Doe',
  autocomplete = 'off',
  spellcheck = false,
  isTextArea, required = true,
  handleInput,
  value = '',
  className = '',
}) => {

  return (
    <div className={`customInput ${className}`}>
      {
        isTextArea ?
          <textarea   className='input fs-5' value={value} placeholder={placeholder} spellCheck={spellcheck} name={name} required={required} onChange={handleInput} />
          :
          <input   className='input fs-5' value={value} type={type} name={name} placeholder={placeholder} autoComplete={autocomplete} spellCheck={spellcheck} required={required} onChange={handleInput} />}

    </div>
  )
}

export default CustomInput