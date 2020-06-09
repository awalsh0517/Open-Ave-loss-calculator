import React from 'react'
import viewKeys from './displayViewKeys'


export default ({ handleChangeView, state }) => {
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.SUCCESS)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.FORM5)
  }
  return (
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
          <div>
            <span>
              {`Corporate Recruiter:
          ${state.inputs.corporateRecruiterPersonnel === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`Director of Engineering?:
          ${state.inputs.directorEngineering === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`It Technician?:
          ${state.inputs.itTechnician === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`Human Resource Manager?:
          ${state.inputs.humanResourcesManager === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`CEO?:
          ${state.inputs.ceo === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`Peer Worker?:
          ${state.inputs.peerWorker === 'Yes' ? 'Yes' : 'No'}`}
            </span>
          </div>
          <div>
            <span>
              {`What is the lost cost due to staff morale?:
          ${state.inputs.staffMorale}`}
            </span>
          </div>
          <div>
            <span>
              {`What is the lost cost due to lost customers?:
          ${state.inputs.lostCustomers}`}
            </span>
          </div>
          <div>
            <span>
              {`What is the average days the position will be vacant?:
          ${state.inputs.daysVacant}`}
            </span>
          </div>
          <div>
            <span>
              {`How much will your unemployement tax increase?:
          ${state.inputs.unemployementTaxIncrease}`}
            </span>
          </div>
          <div>
            <span>
              {`What are the potental cost due to legal claims?:
          ${state.inputs.legalClaims}`}
            </span>
          </div>
          <div>
            <span>
              {`What are the cost of travel and registration fees for training?:
          ${state.inputs.travelRegistrationFees}`}
            </span>
          </div>
          <div>
            <span>
              {`What are the costs if you use an outside trainer?:
          ${state.inputs.outsideTrainer}`}
            </span>
          </div>
          <div>
            <span>
              {`What are the costs of any workshop materials related to outside training?:
          ${state.inputs.workshopMaterials}`}
            </span>
          </div>
          <button
            className="formSubmitButton"
            type="button"
            id="submitButton"
            onClick={handleNextPageClick}
          >
            SUBMIT
          </button>
          <button
            className="formSubmitButton"
            type="button"
            id="submitButton"
            onClick={handlePreviousPageClick}
          >
            Previous
          </button>
        </div>
      </form>
    </div>
  )
}
