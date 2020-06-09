import React from 'react'
import Input from './Input'
import viewKeys from './displayViewKeys'

const corporateRecruiterPersonnelOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const directorEngineeringOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const itTechnicianOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const humanResourcesManagerOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const ceoOptions = [
  {
    value: 'No',
    labelText: 'No',
  },
  {
    value: 'Yes',
    labelText: 'Yes',
  },
]

const peerWorkerOptions = [
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
    handleChangeView(viewKeys.FORM4)
  }
  const handlePreviousPageClick = () => {
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
        <h1>Personnel Costs</h1>
        <h2>Are you?</h2>

        <Input
          dispatch={dispatch}
          id="corporate_recruiter_personnel"
          labelText="Corporate Recruiter"
          name="corporateRecruiterPersonnel"
          type="dropdown"
          value={state.inputs.corporateRecruiterPersonnel}
          options={corporateRecruiterPersonnelOptions}

        />
        <Input
          dispatch={dispatch}
          id="director_engineering"
          labelText="Director of Engineering?"
          name="directorEngineering"
          type="dropdown"
          value={state.inputs.directorEngineering}
          options={directorEngineeringOptions}

        />
        <Input
          dispatch={dispatch}
          id="it_technician"
          labelText="It Technician?"
          name="itTechnician"
          type="dropdown"
          value={state.inputs.itTechnician}
          options={itTechnicianOptions}

        />
        <Input
          dispatch={dispatch}
          id="human_resources_manager"
          labelText="Human Resources Manager?"
          name="humanResourcesManager"
          type="dropdown"
          value={state.inputs.humanResourcesManager}
          options={humanResourcesManagerOptions}

        />
        <Input
          dispatch={dispatch}
          id="ceo"
          labelText="CEO?"
          name="ceo"
          type="dropdown"
          value={state.inputs.ceo}
          options={ceoOptions}

        />
        <Input
          dispatch={dispatch}
          id="peer_worker"
          labelText="Peer Worker?"
          name="peerWorker"
          type="dropdown"
          value={state.inputs.peerWorker}
          options={peerWorkerOptions}
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
