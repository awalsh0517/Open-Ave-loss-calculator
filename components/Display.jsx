import React, { useState, useReducer } from 'react'
import Form from './Form'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'
import Review from './Review'
import Success from './Success'
import displayViewKeys from './displayViewKeys'
import formActions from './formActions'

const initialState = {
  inputs: {
    name: '',
    email: '',
    startDate: '',
    endDate: '',
    companyIndustry: '',
    dolAnnualSalary: '0',
    residenceDegree: '',
    occupationalSpecialty: '',
    laborNaicsCode: '',
    oesSocCode: '',
    corporateRecruiter: '',
    signOnBonus: '',
    relocationBonus: '',
    corporateRecruiterPersonnel: '',
    directorEngineering: '',
    itTechnician: '',
    humanResourcesManager: '',
    ceo: '',
    peerWorker: '',
    staffMorale: '',
    lostCustomers: '',
    daysVacant: '',
    unemployementTaxIncrease: '',
    legalClaims: '',
    travelRegistrationFees: '',
    outsideTrainer: '',
    workshopMaterials: '',
  },
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case formActions.INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [payload.name]: payload.value,
        },
      }

    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [viewState, setViewState] = useState(displayViewKeys.FORM)

  const handleChangeView = (targetState) => {
    setViewState(targetState)
  }

  return (
    <div>
      {
        viewState === displayViewKeys.FORM &&
        <Form handleChangeView={handleChangeView} state={state} dispatch={dispatch} />
      }
      {
        viewState === displayViewKeys.FORM2 &&
        <Form2 handleChangeView={handleChangeView} state={state} dispatch={dispatch} />
      }
      {
        viewState === displayViewKeys.FORM3 &&
        <Form3 handleChangeView={handleChangeView} state={state} dispatch={dispatch} />
      }
      {
        viewState === displayViewKeys.FORM4 &&
        <Form4 handleChangeView={handleChangeView} state={state} dispatch={dispatch} />
      }
      {
        viewState === displayViewKeys.FORM5 &&
        <Form5 handleChangeView={handleChangeView} state={state} dispatch={dispatch} />
      }
      {
        viewState === displayViewKeys.REVIEW &&
        <Review handleChangeView={handleChangeView} state={state} />
      }
      {
        viewState === displayViewKeys.SUCCESS &&
        <Success handleChangeView={handleChangeView} state={state} />
      }

    </div>

  )
}
