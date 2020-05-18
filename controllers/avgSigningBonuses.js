const models = require('../models')

const getAllAvgSigningBonuses = async (request, response) => {
  try {
    const avgSigningBonuses = await models.avgSigningBonuses.findAll()

    return avgSigningBonuses ? response.send(avgSigningBonuses) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve salaries, please try agin')
  }
}

module.exports = { getAllAvgSigningBonuses }