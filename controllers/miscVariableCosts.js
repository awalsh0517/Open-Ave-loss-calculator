const models = require('../models')

const getAllMiscVariableCosts = async (request, response) => {
  try {
    const miscVariableCosts = await models.miscVariableCosts.findAll()

    return miscVariableCosts ? response.send(miscVariableCosts) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve salaries, please try agin')
  }
}

module.exports = { getAllMiscVariableCosts }
