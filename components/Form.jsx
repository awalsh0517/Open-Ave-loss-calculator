import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

export default ({ handleChangeView, state, dispatch }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.FORM2)
  }

  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Information</h1>
        <h2>Tell us about the employee.</h2>

        <Input
          dispatch={dispatch}
          id="name"
          labelText="Name"
          name="name"
          value={state.inputs.name}
          placeholder="First and Last Name"
        />
        <Input
          dispatch={dispatch}
          id="email"
          labelText="Email"
          name="email"
          type="email"
          value={state.inputs.email}
          placeholder="example@example.com"

        />
        <Input
          dispatch={dispatch}
          id="start_date"
          labelText="Time Period Start"
          name="startDate"
          type="date"
          value={state.inputs.startDate}
        />
        <Input
          dispatch={dispatch}
          id="end_date"
          labelText="Time Period End"
          name="endDate"
          type="date"
          value={state.inputs.endDate}
        />
        <Input
          dispatch={dispatch}
          id="company_industry"
          labelText="Company Industry"
          name="companyIndustry"
          value={state.inputs.companyIndustry}
          placeholder="example: Ecommerce"
        />
        <Input
          dispatch={dispatch}
          id="dol_annual_salary"
          labelText="DOL Annual Salary"
          name="dolAnnualSalary"
          value={state.inputs.dolAnnualSalary}
          placeholder="$0.00"
        />
        <Input
          dispatch={dispatch}
          id="residence_degree"
          labelText="Residence Degree"
          name="residenceDegree"
          value={state.inputs.residenceDegree}
          placeholder="example: Computer Science"
        />
        <Input
          dispatch={dispatch}
          id="occupational_specialty"
          labelText="Occupational Specialty"
          name="occupationalSpecialty"
          value={state.inputs.occupationalSpecialty}
          placeholder="example: Front-end Engineer"
        />
        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handleNextPageClick}
        >
          NEXT
        </button>
      </form>
    </div>
  )
}
