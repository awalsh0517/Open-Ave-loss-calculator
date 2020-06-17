import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import viewKeys from './displayViewKeys'

import { calculateSavings } from '../utils/calculations'


export default ({ handleChangeView, state }) => {
  const [totalSavings, setTotalSavings] = useState(0)
  const [ExitDirectCostTotal, setExitDirectCost] = useState(0)
  const [ExitHiddenCostTotal, setExitHiddenCost] = useState(0)
  const [rnhDirectCostTotal, setRnhDirectCost] = useState(0)
  const [rnhHiddenCostTotal, setRnhHiddenCost] = useState(0)
  const [onBoardingDirectCostTotal, setOnBoardingDirectCost] = useState(0)
  const [onBoardingHiddenCostTotal, setOnBoardingHiddenCost] = useState(0)

  useEffect(() => {
    async function calculateTotal() {
      await Axios.post('http://localhost:1337/userInputs', {
        userFullName: state.inputs.name,
        userEmail: state.inputs.email,
        timePeriodStart: state.inputs.startDate,
        timePeriodEnd: state.inputs.endDate,
        companyIndustry: state.inputs.companyIndustry,
        DOLAnnualSalary: Number(state.inputs.dolAnnualSalary).toFixed(2),
        EIRDegree: state.inputs.residenceDegree,
        EIRJobTitle: state.inputs.jobTitle,
        EIROccSpec: state.inputs.occupationalSpecialty,
        laborNAICSCode: state.inputs.laborNaicsCode,
        OESSOCCode: state.inputs.oesSocCode,
        isExternalRecruiterUsed: state.inputs.corporateRecruiter,
        isOfferedSigningBonus: state.inputs.signOnBonus,
        isOfferedRelocationBonus: state.inputs.relocationBonus,
        averageDaysVacant: state.inputs.daysVacant,
        isCorpRecuiterInvolved: state.inputs.corporateRecruiterPersonnel,
        isDirOfEngineeringInvolved: state.inputs.directorEngineering,
        isItTechnicianInvolved: state.inputs.itTechnician,
        isHrManagerInvolved: state.inputs.humanResourcesManager,
        isCeoInvolved: state.inputs.ceo,
        isPeerWorkerInvolved: state.inputs.peerWorker,
        estUnemployTaxInc: state.inputs.unemployementTaxIncrease,
        possibleLegalClaimsCost: state.inputs.legalClaims,
        travelAndRegFees: state.inputs.travelRegistrationFees,
        outsideTrainerCost: state.inputs.outsideTrainer,
        workShopMaterialCost: state.inputs.workshopMaterials,
        staffMorale: state.inputs.staffMorale,
        productionDelays: state.inputs.productionDelays,
        lostCustomers: state.inputs.lostCustomers,
      })
      const {
        total,
        ExitDirectCost,
        ExitHiddenCost,
        rnhDirectCost,
        rnhHiddenCost,
        onBoardingDirectCost,
        onBoardingHiddenCost,
      } = await calculateSavings(state)

      setTotalSavings(total)
      setExitDirectCost(ExitDirectCost)
      setExitHiddenCost(ExitHiddenCost)
      setRnhDirectCost(rnhDirectCost)
      setRnhHiddenCost(rnhHiddenCost)
      setOnBoardingDirectCost(onBoardingDirectCost)
      setOnBoardingHiddenCost(onBoardingHiddenCost)
    }

    calculateTotal()
  }, [])
  const handleNextPageClick = () => {
    handleChangeView(viewKeys.FORM)
  }
  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.REVIEW)
  }
  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <h1>Thank you for filling out our form.</h1>
        <h2>Here is how much you can save.</h2>
        <h3>{`$${totalSavings}`}</h3>

        <h4>Summary of Costs Associate with Employee Loss</h4>
        <h5>
          Employee Exit - Direct Costs: $
          {`${ExitDirectCostTotal}`}
        </h5>
        <h5>
          Employee Exit - Hidden Costs: $
          {`${ExitHiddenCostTotal}`}
        </h5>
        <h5>
          Recruitment and Hiring - Direct Costs: $
          {`${rnhDirectCostTotal}`}
        </h5>
        <h5>
          Recruitment and Hiring - Hidden Costs: $
          {`${rnhHiddenCostTotal}`}
        </h5>
        <h5>
          Onboarding - Direct Costs: $
          {`${onBoardingDirectCostTotal}`}
        </h5>
        <h5>
          Onboarding - Hidden Costs: $
          {`${onBoardingHiddenCostTotal}`}
        </h5>

        <button
          className="formSubmitButton"
          type="button"
          id="submitButton"
          onClick={handleNextPageClick}
        >
          Print
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
