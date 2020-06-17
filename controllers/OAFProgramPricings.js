const models = require('../models')

const getAllOAFProgramPricings = async (request, response) => {
  try {
    const OAFProgramPricings = await models.OAFProgramPricings.findAll()

    return OAFProgramPricings ? response.send(OAFProgramPricings) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve OAFProgramPricings, please try agin')
  }
}

module.exports = { getAllOAFProgramPricings }
