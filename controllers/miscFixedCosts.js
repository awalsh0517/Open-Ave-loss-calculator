const models = require('../models')

const getAllMiscFixedCosts = async (request, response) => {
  try {
    const miscFixedCosts = await models.miscFixedCosts.findAll()

    return miscFixedCosts ? response.send(miscFixedCosts) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve misc fixed costs, please try agin')
  }
}

module.exports = { getAllMiscFixedCosts }