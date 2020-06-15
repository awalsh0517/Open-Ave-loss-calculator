import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

export default ({ handleChangeView, state, dispatch }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.FORM5)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.FORM3)
  }
  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Lost Costs</h1>
        <h2>What are the costs associated with losing the employee?</h2>

        <Input
          dispatch={dispatch}
          id="staff_morale"
          labelText="What is the lost cost due to staff morale?"
          name="staffMorale"
          value={state.inputs.staffMorale}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="lost_customers"
          labelText="What is the lost cost due to lost customers?"
          name="lostCustomers"
          value={state.inputs.lostCustomers}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="days_vacant"
          labelText="What is the average days the position will be vacant?"
          name="daysVacant"
          value={state.inputs.daysVacant}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="unemployement_tax_increase"
          labelText="How much will your unemployement tax increase?"
          name="unemployementTaxIncrease"
          value={state.inputs.unemployementTaxIncrease}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="legal_claims"
          labelText="What are the potental cost due to legal claims?"
          name="legalClaims"
          value={state.inputs.legalClaims}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="production_delays"
          labelText="What are the potental cost due to production delays?"
          name="productionDelays"
          value={state.inputs.productionDelays}
          placeholder="$0.00"
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
