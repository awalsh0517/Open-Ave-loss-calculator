import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

export default ({ handleChangeView, state, dispatch }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.REVIEW)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.FORM4)
  }
  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Outside Training</h1>
        <h2>What are the costs associated with outside training?</h2>
        <Input
          dispatch={dispatch}
          id="travel_registration_fees"
          labelText="What are the cost of travel and registration fees for training?"
          name="travelRegistrationFees"
          value={state.inputs.travelRegistrationFees}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="outside_trainer"
          labelText="What are the costs if you use an outside trainer?"
          name="outsideTrainer"
          value={state.inputs.outsideTrainer}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="workshop_materials"
          labelText="What are the costs of any workshop materials related to outside training?"
          name="workshopMaterials"
          value={state.inputs.workshopMaterials}
          placeholder="$0.00"
        />
        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handleNextPageClick}
        >
          Review
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
