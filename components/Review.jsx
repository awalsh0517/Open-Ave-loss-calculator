import React from 'react'
import Axios from 'axios'
import viewKeys from './displayViewKeys'


export default ({ handleChangeView, state }) => {
  const handleNextPageClick = async () => {
    await Axios.post('http://localhost:1337/userInputs', {
      name: state.inputs.name,
      email: state.inputs.email,
      timeStart: state.inputs.startDate,
      timeEnd: state.inputs.endDate,
      companyIndustry: state.inputs.companyIndustry,
      annualSalaryDOL: state.inputs.dolAnnualSalary,
      eirDegree: state.inputs.residenceDegree,
      eirJobTitle: state.inputs.occupationalSpecialty,
      eirOccupationalSpecialty: state.inputs.occupationalSpecialty,
      laborNaicsCode: state.inputs.laborNaicsCode,
      oesSocCode: state.inputs.oesSocCode,
      isExternalRecruiter: state.inputs.corporateRecruiter,
      isSignOnBonus: state.inputs.signOnBonus,
      isRelocationBonusOffered: state.inputs.relocationBonus,
    })
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
        <h2 id="reviewh2">Lets review your information</h2>
        <div>
          {/* {
          Object.keys(state.input).map(input => (<div className="reviewField">{`${input}`}</div>))
        } */}
          <div className="reviewField">
            <span className="review_text">Name:</span>
            <span className="review_text review_response">{state.inputs.name}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Email:</span>
            <span className="review_text review_response">{state.inputs.email}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Start Date:</span>
            <span className="review_text review_response">{state.inputs.startDate}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">End Date:</span>
            <span className="review_text review_response">{state.inputs.endDate}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Company Industry:</span>
            <span className="review_text review_response">{state.inputs.companyIndustry}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">DOL Annual Salary:</span>
            <span className="review_text review_response">{state.inputs.dolAnnualSalary}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Residence Degree:</span>
            <span className="review_text review_response">{state.inputs.residenceDegree}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Occupational Specialty:</span>
            <span className="review_text review_response">{state.inputs.occupationalSpecialty}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Labor NAICS Code:</span>
            <span className="review_text review_response">{state.inputs.laborNaicsCode}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">OES SOC Code:</span>
            <span className="review_text review_response">{state.inputs.oesSocCode}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Is the employer using an external corporate recruiter?:</span>
            <span className="review_text review_response">
              {state.inputs.corporateRecruiter === 'Yes' ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="reviewField">
            <span className="review_text">Is the employer offering a sign on bonus?:</span>
            <span className="review_text review_response">{state.inputs.signOnBonus === 'Yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Is the employer offering a relocation bonus?:</span>
            <span className="review_text review_response">{state.inputs.relocationBonus === 'Yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Corporate Recruiter:</span>
            <span className="review_text review_response">
              {state.inputs.corporateRecruiterPersonnel === 'Yes' ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="reviewField">
            <span className="review_text">Director of Engineering?:</span>
            <span className="review_text review_response">
              {state.inputs.directorEngineering === 'Yes' ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="reviewField">
            <span className="review_text">It Technician?:</span>
            <span className="review_text review_response">{state.inputs.itTechnician === 'Yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Human Resource Manager?:</span>
            <span className="review_text review_response">
              {state.inputs.humanResourcesManager === 'Yes' ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="reviewField">
            <span className="review_text">CEO?:</span>
            <span className="review_text review_response">{state.inputs.ceo === 'Yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">Peer Worker?:</span>
            <span className="review_text review_response">{state.inputs.peerWorker === 'Yes' ? 'Yes' : 'No'}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What is the lost cost due to staff morale?:</span>
            <span className="review_text review_response">{state.inputs.staffMorale}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What is the lost cost due to lost customers?:</span>
            <span className="review_text review_response">{state.inputs.lostCustomers}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What is the average days the position will be vacant?:</span>
            <span className="review_text review_response">{state.inputs.daysVacant}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">How much will your unemployement tax increase?:</span>
            <span className="review_text review_response">{state.inputs.unemployementTaxIncrease}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What are the potental cost due to legal claims?:</span>
            <span className="review_text review_response">{state.inputs.legalClaims}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What are the cost of travel and registration fees for training?:</span>
            <span className="review_text review_response">{state.inputs.travelRegistrationFees}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">What are the costs if you use an outside trainer?:</span>
            <span className="review_text review_response">{state.inputs.outsideTrainer}</span>
          </div>
          <div className="reviewField">
            <span className="review_text">
              What are the costs of any workshop materials related to outside training?:
            </span>
            <span className="review_text review_response">{state.inputs.workshopMaterials}</span>
          </div>
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

      </form>
    </div>
  )
}
