import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

const companyIndustryOptions = [
  {
    value: 'Finance/Banking',
    labelText: 'Finance/Banking',
  },
  {
    value: 'Scientific',
    labelText: 'Scientific',
  },
  {
    value: 'Engineering',
    labelText: 'Engineering',
  },
  {
    value: 'IT/Information Systems/Data Processing',
    labelText: 'IT/Information Systems/Data Processing',
  },
  {
    value: 'Sales/Marketing',
    labelText: 'Sales/Marketing',
  },
]

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
          type="dropdown"
          value={state.inputs.companyIndustry}
          options={companyIndustryOptions}
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
          labelText="Expert in Residence Degree"
          name="residenceDegree"
          value={state.inputs.residenceDegree}
          placeholder="example: Computer Science"
        />
        <Input
          dispatch={dispatch}
          id="job_title"
          labelText="Expert in Residence Job Title"
          name="jobTitle"
          value={state.inputs.jobTitle}
          placeholder="example: Software Developer Expert in Residence"
        />
        <Input
          dispatch={dispatch}
          id="occupational_specialty"
          labelText="Expert in Residence Occupational Specialty"
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
