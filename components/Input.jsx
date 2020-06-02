import React from 'react'
import formActions from './formActions'

const isTypeTextLike = type => type === 'text' || type === 'email' || type === 'date'

const isTypeDropdown = type => type === 'dropdown'

export default ({
  dispatch,
  id,
  labelText,
  name,
  options,
  type = 'text',
  value,
}) => {
  const handleChange = (event) => {
    const payload = {
      name,
      value: event.target.value,
    }
    dispatch({ type: formActions.INPUT_CHANGE, payload })
  }

  return (
    <div className="formField">
      <label htmlFor={id}>{labelText}</label>
      {
        isTypeTextLike(type) && (
          <>
            <input type={type} name={name} value={value} onChange={handleChange} id={id} />
          </>
        )
      }
      {
        isTypeDropdown(type) && (
          <select name={name} value={value} onChange={handleChange} id={id}>
            {
              value === '' && (
                <option value="">Please Select an Option</option>
              )
            }
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.labelText}</option>
            ))}
          </select>
        )
      }
    </div>
  )
}
