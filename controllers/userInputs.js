const models = require('../models')

const getAllUserInputs = async (request, response) => {
  try {
    const userInputs = await models.userInputs.findAll()

    return userInputs ? response.send(userInputs) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve user inputs, please try agin')
  }
}

const saveUserInputs = async (request, response) => {
  const {
    name,
    email,
    timeStart,
    timeEnd,
    companyIndustry,
    annualSalaryDOL,
    eirDegree,
    eirJobTitle,
    eirOccupationalSpecialty,
    laborNaicsCode,
    oesSocCode,
    isExternalRecruiter,
    isSignOnBonus,
    isRelocationBonusOffered,
  } = request.body

  await models.userInputs.create({
    userFullName: name,
    userEmail: email,
    timePeriodStart: timeStart,
    timePeriodEnd: timeEnd,
    companyIndustry,
    EIROccSpec: eirOccupationalSpecialty,
    EIRJobTitle: eirJobTitle,
    laborNAICSCode: laborNaicsCode,
    DOLAnnualSalary: annualSalaryDOL,
    DOLHourlySalary: 9812,
    weeklyHours: 40,
    OESSOCCode: oesSocCode,
    EIRDegree: eirDegree,
    isExternalRecruiterUsed: isExternalRecruiter,
    isOfferedSigningBonus: isSignOnBonus,
    isOfferedRelocationBonus: isRelocationBonusOffered,
  })
  return response.send('Hooray!')
}


module.exports = { getAllUserInputs, saveUserInputs }
