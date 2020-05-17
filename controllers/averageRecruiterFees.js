const models = require('../models')

const getAllAverageRecruiterFees = async (request, response) => {
  try {
    const averageRecruiterFees = await models.averageRecruiterFees.findAll()

    return averageRecruiterFees ? response.send(averageRecruiterFees) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve Average Recruiter Fees, please try agin')
  }
}

module.exports = { getAllAverageRecruiterFees }
