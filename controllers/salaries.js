const models = require('../models')

const getAllSalaries = async (request, response) => {
  try {
    const salaries = await models.salaries.findAll()

    return salaries ? response.send(salaries) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve salaries, please try agin')
  }
}

module.exports = { getAllSalaries }