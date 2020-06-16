const models = require('../models')

const getAllUserInputs = async (request, response) => {
  try {
    const userInputs = await models.userInputs.findAll()

    return userInputs ? response.send(userInputs) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve user inputs, please try agin')
  }
}

const postUserInputs = async (request, response) => {
  // try {
  const {
    userFullName,
    userEmail,
    timePeriodStart,
    timePeriodEnd,
    companyIndustry,
    EIROccSpec,
    EIRJobTitle,
    laborNAICSCode,
    DOLAnnualSalary,
    // DOLHourlySalary,
    // weeklyHours,
    OESSOCCode,
    EIRDegree,
    isExternalRecruiterUsed,
    isOfferedSigningBonus,
    isOfferedRelocationBonus,
    // averageDaysVacant,
    // isCorpRecuiterInvolved,
    // isDirOfEngineeringInvolved,
    // isItTechnicianInvolved,
    // isHrManagerInvolved,
    // isCeoInvolved,
    // isPeerWorkerInvolved,
    // estUnemployTaxInc,
    // possibleLegalClaimsCost,
    // travelAndRegFees,
    // outsideTrainerCost,
    // workShopMaterialCost,
  } = request.body

  // if (!userFullName || !userEmail) {
  //   return response.status(400).send('Required fields are: userEmail, timePeriodStart, timePeriodEnd, companyIndustry, DOLAnnualSalary, weeklyHours, averageDaysVacant')
  // }

  const newUserInput = await models.userInputs.create({
    userFullName,
    userEmail,
    timePeriodStart,
    timePeriodEnd,
    companyIndustry,
    EIROccSpec,
    EIRJobTitle,
    laborNAICSCode,
    DOLAnnualSalary,
    // DOLHourlySalary,
    // weeklyHours,
    OESSOCCode,
    EIRDegree,
    isExternalRecruiterUsed,
    isOfferedSigningBonus,
    isOfferedRelocationBonus,
    // averageDaysVacant,
    // isCorpRecuiterInvolved,
    // isDirOfEngineeringInvolved,
    // isItTechnicianInvolved,
    // isHrManagerInvolved,
    // isCeoInvolved,
    // isPeerWorkerInvolved,
    // estUnemployTaxInc,
    // possibleLegalClaimsCost,
    // travelAndRegFees,
    // outsideTrainerCost,
    // workShopMaterialCost,
  })

  return response.status(201).send(newUserInput)
  // } catch (error) {
  //   return response.status(500).send('Unable to add new user information, please try again')
  // }
}

module.exports = { getAllUserInputs, postUserInputs }
