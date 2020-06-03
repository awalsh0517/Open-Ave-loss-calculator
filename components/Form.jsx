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
        <h1>Information</h1>

        <Input
          dispatch={dispatch}
          id="name"
          labelText="Name"
          name="name"
          value={state.inputs.name}
        />
        <Input
          dispatch={dispatch}
          id="email"
          labelText="Email"
          name="email"
          type="email"
          value={state.inputs.email}
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
        />
        <Input
          dispatch={dispatch}
          id="dol_annual_salary"
          labelText="DOL Annual Salary"
          name="dolAnnualSalary"
          value={state.inputs.dolAnnualSalary}
        />
        <Input
          dispatch={dispatch}
          id="residence_degree"
          labelText="Residence Degree"
          name="residenceDegree"
          value={state.inputs.residenceDegree}
        />
        <Input
          dispatch={dispatch}
          id="occupational_specialty"
          labelText="Occupational Specialty"
          name="occupationalSpecialty"
          value={state.inputs.occupationalSpecialty}
        />
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
          Submit
        </button>
      </form>
    </div>
  )
}
