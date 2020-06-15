/* eslint-disable import/prefer-default-export */
const { getInternalPersonnelTasksWithSalaries } = require('../actions/costs')


const fetchInternalPersonnelTasksWithSalaries = async (name) => {
  const { data } = await getInternalPersonnelTasksWithSalaries(name)
  const dataList = data.map((task) => {
    const newObj = { hoursSpent: task.hoursSpent, hourlyRate: Number(task.salary.hourlyRate), salaryId: task.salaryId }
    return newObj
  })
  return dataList
}

module.exports = fetchInternalPersonnelTasksWithSalaries
