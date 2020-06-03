import React from 'react'

export default ({ state }) => (

  <div>
    <form
      className="informationForm"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <h1>Review</h1>
      <h2>Lets review your information</h2>
      <div>
        {/* {
          Object.keys(state.input).map(input => (<div>{`${input}`}</div>))
        } */}
        <div>
          <span>
            {`Name:
          ${state.inputs.name}`}
          </span>
        </div>
        <div>
          <span>
            {`Email:
          ${state.inputs.email}`}
          </span>
        </div>
        <div>
          <span>
            {`Start Date:
          ${state.inputs.startDate}`}
          </span>
        </div>
        <div>
          <span>
            {`End Date:
          ${state.inputs.endDate}`}
          </span>
        </div>
        <div>
          <span>
            {`Company Industry:
          ${state.inputs.companyIndustry}`}
          </span>
        </div>
        <div>
          <span>
            {`DOL Annual Salary:
          ${state.inputs.dolAnnualSalary}`}
          </span>
        </div>
        <div>
          <span>
            {`Residence Degree:
          ${state.inputs.residenceDegree}`}
          </span>
        </div>
        <div>
          <span>
            {`Occupational Specialty:
          ${state.inputs.occupationalSpecialty}`}
          </span>
        </div>
        <div>
          <span>
            {`Labor NAICS Code:
          ${state.inputs.laborNaicsCode}`}
          </span>
        </div>
        <div>
          <span>
            {`OES SOC Code:
          ${state.inputs.oesSocCode}`}
          </span>
        </div>
        <div>
          <span>
            {`Is the employer using an external corporate recruiter?:
          ${state.inputs.corporateRecruiter === 'Yes' ? 'Yes' : 'No'}`}
          </span>
        </div>
        <div>
          <span>
            {`Is the employer offering a sign on bonus?:
          ${state.inputs.signOnBonus === 'Yes' ? 'Yes' : 'No'}`}
          </span>
        </div>
        <div>
          <span>
            {`Is the employer offering a relocation bonus?:
          ${state.inputs.relocationBonus === 'Yes' ? 'Yes' : 'No'}`}
          </span>
        </div>
      </div>
    </form>

  </div>
)
