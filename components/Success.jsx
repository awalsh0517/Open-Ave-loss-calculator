import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ReactToPdf from 'react-to-pdf'
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

  const handlePreviousPageClick = () => {
    handleChangeView(viewKeys.REVIEW)
  }

  const ref = React.createRef()

  return (
    <div>
      <form
        className="informationForm"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <div ref={ref}>
          <h1 className="noprint">Thank you for filling out our form.</h1>
          <h2>Here is how much you can save.</h2>
          <h1>{`$${totalSavings}`}</h1>

          <div className="summaryCosts">
            <h4 className="summaryTitle">Summary of Costs Associated with Employee Loss</h4>

            <table className="summaryTable">
              <thead>
                <tr>
                  <th>Cost Categories</th>
                  <th>Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Employee Exit - Direct Costs:
                  </td>
                  <td>
                    {`$${ExitDirectCostTotal}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Employee Exit - Hidden Costs:
                  </td>
                  <td>
                    {`$${ExitHiddenCostTotal}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Recruitment and Hiring - Direct Costs:
                  </td>
                  <td>
                    {`$${rnhDirectCostTotal}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Recruitment and Hiring - Hidden Costs:
                  </td>
                  <td>
                    {`$${rnhHiddenCostTotal}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Onboarding - Direct Costs:
                  </td>
                  <td>
                    {`$${onBoardingDirectCostTotal}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    Onboarding - Hidden Costs:
                  </td>
                  <td>
                    {`$${onBoardingHiddenCostTotal}`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ReactToPdf targetRef={ref} filename="OpenAveSavings.pdf">
          {
            ({ toPdf }) => (
              <button className="formSubmitButton noprint" type="button" onClick={toPdf}>Pdf</button>
            )
          }
        </ReactToPdf>

        <button
          className="formSubmitButton noprint"
          type="button"
          id="submitButton"
          onClick={window.print}
        >
          Print
        </button>
        <button
          className="formSubmitButton noprint"
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
