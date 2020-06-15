// import axios from 'axios'
const { userInputSample } = require('../mocks/userInputs')
const jobPostingFees = require('./jobPostingFees')
const fetchInternalPersonnelTasksWithSalaries = require('./internalPersonnelTasks')

const calculateExitDirectCosts = (dolAnnualSalary) => {
  const separationPay = (dolAnnualSalary / 366) * 14
  return separationPay
}

const calculateExitHiddenCosts = async (
  dolAnnualSalary,
  personnelUsed,
  unemployementTaxIncrease,
  legalClaims,
  staffMorale) => {
  const personnalTaskSalaries = await fetchInternalPersonnelTasksWithSalaries('Exit')

  let combinedSalaries = 0

  if (personnelUsed.humanResourcesManager === 'Yes') {
    combinedSalaries += personnalTaskSalaries.reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  const exitPersonnelCosts = combinedSalaries
  const exitProscpectiveCosts = unemployementTaxIncrease + legalClaims

  const exitEmployeeProductivityCost = ((dolAnnualSalary * 0.15) / 366) * 14
  const exitExitProductivityCost = exitEmployeeProductivityCost +
    staffMorale +
    userInputSample.productionDelays // Needs form input

  const totalExitHiddenCosts = exitPersonnelCosts +
    exitProscpectiveCosts +
    exitExitProductivityCost

  return totalExitHiddenCosts
}

const calculateRnhDirectCosts = async (personnelUsed, dolAnnualSalary) => {
  const personnalTaskSalaries = await fetchInternalPersonnelTasksWithSalaries('RnH')
  let combinedSalaries = 0

  if (personnelUsed.corporateRecruiterPersonnel === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 1).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.directorEngineering === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 2).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.humanResourcesManager === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 4).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.ceo === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 5).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.peerWorker === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 6).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  const externalRecruiterFee = personnelUsed.externalRecruiter === 'Yes'
    ? dolAnnualSalary * 0.22 // using the average of all the averages
    : 0

  const relocationBonus = personnelUsed.relocationBonus === 'Yes'
    ? 21000
    : 0

  const signingBonus = personnelUsed.signOnBonus === 'Yes'
    ? 21341.50 // fixed number based on the median of whats currently in the database
    : 0

  const advertisingCosts = await jobPostingFees()

  const totalRnhDirectCosts = combinedSalaries +
    externalRecruiterFee +
    relocationBonus +
    signingBonus +
    advertisingCosts

  return totalRnhDirectCosts
}

const calculateRnhHiddenCosts = (dolAnnualSalary, daysVacant, lostCustomers) => {
  const vacancyCost = ((dolAnnualSalary * 0.45) / 365) * daysVacant

  const lostCustomerCost = lostCustomers

  const totalRnhHiddenCosts = vacancyCost + lostCustomerCost

  return totalRnhHiddenCosts
}

const calculateOnboardingDirectCosts = async (personnelUsed,
  travelRegistrationFees,
  outsideTrainer,
  workshopMaterials) => {
  const personnalTaskSalaries = await fetchInternalPersonnelTasksWithSalaries('OnBoarding')
  // const combinedSalaries = (4224 + 334)

  let combinedSalaries = 0


  if (personnelUsed.directorEngineering === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 2).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.itTechnician === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 3).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.humanResourcesManager === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 4).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  if (personnelUsed.peerWorker === 'Yes') {
    combinedSalaries += personnalTaskSalaries.filter(task => task.salaryId === 6).reduce((total, task) => {
      const newTotal = total + (task.hoursSpent * task.hourlyRate)
      return newTotal
    }, 0)
  }

  const outsideTrainingCosts = travelRegistrationFees +
    outsideTrainer +
    workshopMaterials

  const totalOnboardingDirectCosts = combinedSalaries + outsideTrainingCosts

  return totalOnboardingDirectCosts
}

const calculateOnboardingHiddenCosts = (dolAnnualSalary, daysVacant) => ((dolAnnualSalary * 0.15) /
  365) * daysVacant

const calculateSavings = async (state) => {
  // const { name } = state.inputs
  // const { email } = state.inputs
  // const { startDate } = state.inputs
  // const { endDate } = state.inputs
  // const { companyIndustry } = state.inputs
  const { dolAnnualSalary } = state.inputs
  // const { residenceDegree } = state.inputs
  // const { occupationalSpecialty } = state.inputs
  // const { laborNaicsCode } = state.inputs
  // const { oesSocCode } = state.inputs
  const { corporateRecruiter } = state.inputs
  const { signOnBonus } = state.inputs
  const { relocationBonus } = state.inputs
  const { corporateRecruiterPersonnel } = state.inputs
  const { directorEngineering } = state.inputs
  const { itTechnician } = state.inputs
  const { humanResourcesManager } = state.inputs
  const { ceo } = state.inputs
  const { peerWorker } = state.inputs
  const { staffMorale } = state.inputs
  const { lostCustomers } = state.inputs
  const { daysVacant } = state.inputs
  const { unemployementTaxIncrease } = state.inputs
  const { legalClaims } = state.inputs
  const { travelRegistrationFees } = state.inputs
  const { outsideTrainer } = state.inputs
  const { workshopMaterials } = state.inputs

  const personnelUsed = {
    externalRecruiter: corporateRecruiter,
    signOnBonus,
    relocationBonus,
    corporateRecruiterPersonnel,
    directorEngineering,
    itTechnician,
    humanResourcesManager,
    ceo,
    peerWorker,
  }

  const ExitDirectCost = await calculateExitDirectCosts(dolAnnualSalary)
  const ExitHiddenCost = await calculateExitHiddenCosts(dolAnnualSalary,
    personnelUsed,
    Number(unemployementTaxIncrease),
    Number(legalClaims),
    Number(staffMorale))
  const rnhDirectCost = await calculateRnhDirectCosts(personnelUsed, dolAnnualSalary)
  const rnhHiddenCost = await calculateRnhHiddenCosts(dolAnnualSalary, Number(daysVacant), Number(lostCustomers))
  const onBoardingDirectCost = await calculateOnboardingDirectCosts(personnelUsed,
    Number(travelRegistrationFees),
    Number(outsideTrainer),
    Number(workshopMaterials))
  const onBoardingHiddenCost = await calculateOnboardingHiddenCosts(dolAnnualSalary, Number(daysVacant))

  const total = ExitDirectCost + ExitHiddenCost + rnhDirectCost + rnhHiddenCost +
    onBoardingDirectCost + onBoardingHiddenCost - 21310

  return {
    total: total.toFixed(2),
    ExitDirectCost: ExitDirectCost.toFixed(2),
    ExitHiddenCost: ExitHiddenCost.toFixed(2),
    rnhDirectCost: rnhDirectCost.toFixed(2),
    rnhHiddenCost: rnhHiddenCost.toFixed(2),
    onBoardingDirectCost: onBoardingDirectCost.toFixed(2),
    onBoardingHiddenCost: onBoardingHiddenCost.toFixed(2),
  }
}
module.exports = { calculateSavings }
