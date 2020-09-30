import React from 'react'

const Radio = ({ pergunta, options, id, onChange, value }) => {





  return (
    <fieldset>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem' }}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio
