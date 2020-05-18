const models = require('../models')

const getAllInternalPersonnelTasks = async (request, response) => {
 // try {
    const internalPersonnelTasks = await models.internalPersonnelTasks.findAll()

    return internalPersonnelTasks ? response.send(internalPersonnelTasks) : response.status(500)
 // } catch (error) {
 //   return response.status(500).send('Unable to retrieve salaries, please try agin')
 // }
}

module.exports = { getAllInternalPersonnelTasks }