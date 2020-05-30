import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [timeEnd, setTimeEnd] = useState('')
  const [companyIndustry, setCompanyIndustry] = useState('')
  const [annualSalaryDOL, setAnnualSalaryDOL] = useState('')
  const [eirDegree, setEirDegree] = useState('')
  const [eirJobTitle, setEirJobTitle] = useState('')
  const [eirOccupationalSpecialty, setEirOccupationalSpecialty] = useState('')
  const [laborNaicsCode, setLaborNaicsCode] = useState('')
  const [oesSocCode, setEirOesSocCode] = useState('')
  const [isExternalRecruiter, setIsExternalRecruiter] = useState('No')
  const [isSignOnBonus, setIsSignOnBonus] = useState('No')
  const [isRelocationBonusOffered, setIsRelocationBonusOffered] = useState('No')

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
      <form className="informationForm" action="">
        <h1>Information</h1>

        <div className="formField">
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

        <button className="formButton" type="button" id="nextBtn">Next</button>
        <button className="formButton" type="button" id="prevBtn">Previous</button>

        <div>{isExternalRecruiter}</div>
        <div>{isRelocationBonusOffered}</div>
        <div>{isSignOnBonus}</div>
      </form>
      {/* {
        salaries.map(salary => (<div>{salary}</div>))
      } */}
    </div>
  )
}
