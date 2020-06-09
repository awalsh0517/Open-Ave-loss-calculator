import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

const corporateRecruiterOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const signOnBonusOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const relocationBonusOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

export default ({ handleChangeView, state, dispatch }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.FORM3)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.FORM)
  }
  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Personnel Costs</h1>
        <h2>Are you?</h2>

        <Input
          dispatch={dispatch}
          id="labor_naics_code"
          labelText="Labor NAICS Code"
          name="laborNaicsCode"
          value={state.inputs.laborNaicsCode}
        />
        <Input
          dispatch={dispatch}
          id="oes_soc_code"
          labelText="OES SOC Code"
          name="oesSocCode"
          value={state.inputs.oesSocCode}
        />
        <Input
          dispatch={dispatch}
          id="corporate_recruiter"
          labelText="Is the employer using an external corporate recruiter?"
          name="corporateRecruiter"
          type="dropdown"
          value={state.inputs.corporateRecruiter}
          options={corporateRecruiterOptions}
        />
        <Input
          dispatch={dispatch}
          id="sign_on_bonus"
          labelText="Is the employer offering a sign on bonus?"
          name="signOnBonus"
          type="dropdown"
          value={state.inputs.signOnBonus}
          options={signOnBonusOptions}
        />
        <Input
          dispatch={dispatch}
          id="relocation_bonus"
          labelText="Is the employer offering a relocation bonus?"
          name="relocationBonus"
          type="dropdown"
          value={state.inputs.relocationBonus}
          options={relocationBonusOptions}
        />
        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handleNextPageClick}
        >
          NEXT
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
