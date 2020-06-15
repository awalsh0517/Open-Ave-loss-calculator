const axios = require('axios')

const getSalaries = async () => {
  const { salaries } = await axios.get('http://localhost:1337/salaries') // eslint-disable-line no-undef

  return salaries
}

const getAverageRecruiterFees = async () => {
  const { averageRecruiterFees } = await axios.get('http://localhost:1337/averageRecruiterFees') // eslint-disable-line no-undef

  return averageRecruiterFees
}

const getAvgSigningBonuses = async () => {
  const { avgSigningBonuses } = await axios.get('http://localhost:1337/avgSigningBonuses') // eslint-disable-line no-undef

  return avgSigningBonuses
}

const getInternalPersonnelTasks = async () => {
  const { internalPersonnelTasks } = await axios.get('http://localhost:1337/internalPersonnelTasks') // eslint-disable-line no-undef

  return internalPersonnelTasks
}

const getInternalPersonnelTasksWithSalaries = async (name) => {
  const internalPersonnelTasks = await axios.get(`http://localhost:1337/internalPersonnelTasks/${name}`) // eslint-disable-line no-undef

  return internalPersonnelTasks
}

const getJobPostingFees = async () => {
  const jobPostingFees = await axios.get('http://localhost:1337/jobPostingFees') // eslint-disable-line no-undef

  return jobPostingFees
}

const getMiscFixedCosts = async () => {
  const { miscFixedCosts } = await axios.get('http://localhost:1337/miscFixedCosts') // eslint-disable-line no-undef

  return miscFixedCosts
}

const getMiscVariableCosts = async () => {
  const { miscVariableCosts } = await axios.get('http://localhost:1337/miscVariableCosts') // eslint-disable-line no-undef

  return miscVariableCosts
}

const getOAFProgramPricings = async () => {
  const { OAFProgramPricings } = await axios.get('http://localhost:1337/OAFProgramPricings') // eslint-disable-line no-undef

  return OAFProgramPricings
}

const getUserInputs = async () => {
  const { userInputs } = await axios.get('http://localhost:1337/userInputs') // eslint-disable-line no-undef

  return userInputs
}

module.exports = {
  getAverageRecruiterFees,
  getAvgSigningBonuses,
  getInternalPersonnelTasks,
  getInternalPersonnelTasksWithSalaries,
  getJobPostingFees,
  getMiscFixedCosts,
  getMiscVariableCosts,
  getOAFProgramPricings,
  getSalaries,
  getUserInputs,
}
