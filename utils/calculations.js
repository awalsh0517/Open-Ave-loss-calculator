// import axios from 'axios'
const { userInputSample } = require('../mocks/userInputs')

const calculateExitDirectCosts = () => {
  const separationPay = (userInputSample.DOLAnnualSalary / 366) * 14
  return separationPay
}

const calculateExitHiddenCosts = () => {
  const combinedSalaries = (110 + 110 + 4154)

  const exitPersonnelCosts = combinedSalaries
  const exitProscpectiveCosts = userInputSample.estUnemployTaxInc + userInputSample.possibleLegalClaimsCost

  const exitEmployeeProductivityCost = ((userInputSample.DOLAnnualSalary * 0.15) / 366) * 14
  const exitExitProductivityCost = exitEmployeeProductivityCost +
    userInputSample.staffMorale +
    userInputSample.productionDelays

  const totalExitHiddenCosts = exitPersonnelCosts +
    exitProscpectiveCosts +
    exitExitProductivityCost

  return totalExitHiddenCosts
}

const calculateRnhDirectCosts = () => {
  const combinedSalaries = (425 + 219 + 656 + 875 + 220 + 110)

  let externalRecruiterFee = 0
  let relocationBonus = 0
  let signingBonus = 0

  if (userInputSample.isExternalRecruiterUsed === '1') externalRecruiterFee = userInputSample.DOLAnnualSalary * 0.22

  const advertisingCosts = 4180

  if (userInputSample.isOfferedRelocationBonus === '1') relocationBonus = 21000

  if (userInputSample.isOfferedSigningBonus === '1') signingBonus = 21341.50

  const totalRnhDirectCosts = combinedSalaries +
    externalRecruiterFee +
    relocationBonus +
    signingBonus +
    advertisingCosts

  return totalRnhDirectCosts
}

const calculateRnhHiddenCosts = () => {
  const vacancyCost = ((userInputSample.DOLAnnualSalary * 0.45) / 365) * userInputSample.averageDaysVacant

  const lostCustomerCost = userInputSample.lostCustomers

  const totalRnhHiddenCosts = vacancyCost + lostCustomerCost

  return totalRnhHiddenCosts
}

const calculateOnboardingDirectCosts = () => {
  const combinedSalaries = (4224 + 334)

  const outsideTrainingCosts = userInputSample.travelAndRegFees +
    userInputSample.outsideTrainerCost +
    userInputSample.workShopMaterialCost

  const totalOnboardingDirectCosts = combinedSalaries + outsideTrainingCosts

  return totalOnboardingDirectCosts
}

const calculateOnboardingHiddenCosts = () => ((userInputSample.DOLAnnualSalary * 0.15) /
  365) * userInputSample.averageDaysVacant


const totalCostofEmployeeLoss = () => calculateExitDirectCosts() +
  calculateExitHiddenCosts() +
  calculateRnhDirectCosts() +
  calculateRnhHiddenCosts() +
  calculateOnboardingDirectCosts() +
  calculateOnboardingHiddenCosts()

const overallOafProgramSavings = () => totalCostofEmployeeLoss() - 21310

console.log(overallOafProgramSavings())
