import React, { useReducer } from 'react'
import formActions from './formActions'
import Input from './Input'

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

const corporateRecruiterOptions = [
  {
    value: false,
    labelText: 'No',
  },
  {
    value: true,
    labelText: 'Yes',
  },
]

const signOnBonusOptions = [
  {
    value: false,
    labelText: 'No',
  },
  {
    value: true,
    labelText: 'Yes',
  },
]

const relocationBonusOptions = [
  {
    value: false,
    labelText: 'No',
  },
  {
    value: true,
    labelText: 'Yes',
  },
]

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // OLD STATE
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [timeStart, setTimeStart] = useState('')
  // const [timeEnd, setTimeEnd] = useState('')
  // const [companyIndustry, setCompanyIndustry] = useState('')
  // const [annualSalaryDOL, setAnnualSalaryDOL] = useState('')
  // const [eirDegree, setEirDegree] = useState('')
  // const [eirJobTitle, setEirJobTitle] = useState('')
  // const [eirOccupationalSpecialty, setEirOccupationalSpecialty] = useState('')
  // const [laborNaicsCode, setLaborNaicsCode] = useState('')
  // const [oesSocCode, setEirOesSocCode] = useState('')
  // const [isExternalRecruiter, setIsExternalRecruiter] = useState('No')
  // const [isSignOnBonus, setIsSignOnBonus] = useState('No')
  // const [isRelocationBonusOffered, setIsRelocationBonusOffered] = useState('No')

  // const postUserData = async () => {
  //   await axios.post('http://localhost:1337/userInputs', {
  //     name: 'Rob Perron',
  //     email: 'blah@gmail.com',
  //     timeStart: '10/10/10',
  //     timeEnd: '11/11/11',
  //     companyIndustry: 'Climbing',
  //     annualSalaryDOL: 30000,
  //     eirDegree: 'idk',
  //     eirJobTitle: 'idk',
  //     eirOccupationalSpecialty: 'idk',
  //     laborNaicsCode: '24601',
  //     oesSocCode: '24601',
  //     isExternalRecruiter: 0,
  //     isSignOnBonus: 0,
  //     isRelocationBonusOffered: 1,
  //   })
  // }


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
        <button className="formSubmitButton" type="button" id="submitButton">Submit</button>

        {/* <button type="submit">Submit Placeholder</button> */}

        {/* // OLD FORM */}
        {/* <div className="formField">
          <span htmlFor="name">Name</span>
          <input type="text" name="Search" value={name} onChange={event => setName(event.target.value)} />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="email">Email</span>
          <input type="email" name="info1" id="email" value={email} onChange={event => setEmail(event.target.value)} />
          <br />
        </div>
        <div className="formField">
          <span id="timPeriodspan" htmlFor="timePeriod">Time Period Start</span>
          <input
            id="startDateInput"
            className="timeWorkPeriod"
            type="date"
            name="info1"
            // id="timePeriod"
            value={timeStart}
            onChange={event => setTimeStart(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span id="timPeriodspan" htmlFor="timePeriod">Time Period End</span>
          <input
            id="endDateInput"
            className="timeWorkPeriod"
            type="date"
            name="info1"
            value={timeEnd}
            onChange={event => setTimeEnd(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="companyIndustry">Company Industry</span>
          <input
            type="text"
            name="info1"
            id="companyIndustry"
            value={companyIndustry}
            onChange={event => setCompanyIndustry(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="dolAnnualSalary">DOL Annual Salary</span>
          <input
            type="text"
            name="info1"
            id="dolAnnualSalary"
            value={annualSalaryDOL}
            onChange={event => setAnnualSalaryDOL(event.target.value)}
          />
          <br />
        </div>

        <div className="formField">
          <span htmlFor="residenceDegree">Expert in Residence Degree</span>
          <input
            type="text"
            name="info1"
            id="residenceDegree"
            value={eirDegree}
            onChange={event => setEirDegree(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="residenceJobTitle">Expert in Residence Job Title</span>
          <input
            type="text"
            name="info1"
            id="residenceJobTitle"
            value={eirJobTitle}
            onChange={event => setEirJobTitle(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="occupationalSpecialty">Expert in Residence Occupational Specialty</span>
          <input
            type="text"
            name="info1"
            id="occupationalSpecialty"
            value={eirOccupationalSpecialty}
            onChange={event => setEirOccupationalSpecialty(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="laborNaicsCode">Labor NAICS Code</span>
          <input
            type="text"
            name="info1"
            id="laborNaicsCode"
            value={laborNaicsCode}
            onChange={event => setLaborNaicsCode(event.target.value)}
          />
          <br />
        </div>
        <div className="formField">
          <span htmlFor="oesSocCode">OES/SOC Code</span>
          <input
            type="text"
            name="info1"
            id="oesSocCode"
            value={oesSocCode}
            onChange={event => setEirOesSocCode(event.target.value)}
          />
          <br />
        </div>

        <div className="formField">
          <span htmlFor="corporateRecruiter">Is the employer using an external corporate recruiter?</span>
          <select name="info1" id="corporateRecruiter" onChange={event => setIsExternalRecruiter(event.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <br />
        </div>
        <div className="formField">
          <span htmlFor="signOnBonus">Is the employer offering a sign on bonus?</span>
          <select name="info1" id="signOnBonus" onChange={event => setIsSignOnBonus(event.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <br />
        </div>
        <div className="formField">
          <span htmlFor="relocationBonus">Is the employer offering a relocation bonus?</span>
          <select name="info1" id="relocationBonus" onChange={event => setIsRelocationBonusOffered(event.target.value)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <br />
        </div>

        <div className="formCircles">
          <span className="step" />
          <span className="step" />
        </div>
        <div className="formSubmit">
          <button className="formSubmitButton" type="button" id="submitButton">
            Submit
          </button>
        </div>
        <div>{isExternalRecruiter}</div>
        <div>{isRelocationBonusOffered}</div>
        <div>{isSignOnBonus}</div> */}
      </form>
      {/* {
        salaries.map(salary => (<div>{salary}</div>))
      } */}
    </div>
  )
}
