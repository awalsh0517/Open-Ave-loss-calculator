const models = require('../models')

const getAllUserInputs = async (request, response) => {
  try {
    const userInputs = await models.userInputs.findAll()

    return userInputs ? response.send(userInputs) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve user inputs, please try agin')
  }
}

module.exports = { getAllUserInputs }