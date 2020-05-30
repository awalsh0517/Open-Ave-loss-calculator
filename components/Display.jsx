import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './Form'

export default () => {
  const [salaries, setSalaries] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/salaries')

      setSalaries(data)
    }
    pullData()

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

    // postUserData()
  }, [])

  return (
    <div>
      <Form />
      {
        salaries.map(salary => (<div>{`${salary.title}`}</div>))
      }

    </div>

  )
}
