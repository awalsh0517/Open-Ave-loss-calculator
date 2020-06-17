const models = require('../models')

const getAllJobPostingFees = async (request, response) => {
  try {
    const jobPostingFees = await models.jobPostingFees.findAll()

    return jobPostingFees ? response.send(jobPostingFees) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve job posting fees, please try agin')
  }
}

module.exports = { getAllJobPostingFees }
