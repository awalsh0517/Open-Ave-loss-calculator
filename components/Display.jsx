import React, { useState, useReducer } from 'react'
import Form from './Form'
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
        viewState === displayViewKeys.REVIEW &&
        <Review state={state} />
      }
      {
        viewState === displayViewKeys.SUCCESS &&
        <Success />
      }

    </div>

  )
}
