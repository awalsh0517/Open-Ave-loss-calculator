const models = require('../models')

const getAllInternalPersonnelTasks = async (request, response) => {
  try {
    const internalPersonnelTasks = await models.internalPersonnelTasks.findAll()

    return internalPersonnelTasks ? response.send(internalPersonnelTasks) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve salaries, please try again')
  }
}

const getAllInternalPersonnelTasksWithSalaries = async (request, response) => {
  try {
    const { taskGroup } = request.params
    const internalPersonnelTasks = await models.internalPersonnelTasks.findAll({
      where: { taskGroup },
      include: [{ model: models.salaries }],
    })

    return internalPersonnelTasks ? response.send(internalPersonnelTasks) : response.status(500)
  } catch (error) {
    return response.status(500).send('Unable to retrieve tasks, please try again')
  }
}

module.exports = { getAllInternalPersonnelTasks, getAllInternalPersonnelTasksWithSalaries }
