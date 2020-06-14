import React from 'react'
import viewKeys from './displayViewKeys'

export default ({ handleChangeView }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.FORM)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.REVIEW)
  }
  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Thank you for filling out our form.</h1>
        <h2>Here is how much you can save.</h2>

        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handleNextPageClick}
        >
          Print
        </button>
        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handlePreviousPageClick}
        >
          Previous
        </button>
      </form>
    </div>
  )
}
