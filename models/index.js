const Sequelize = require('sequelize')
const averageRecruiterFeesModel = require('./averageRecruiterFees')
const avgSigningBonusesModel = require('./avgSigningBonuses')
const salariesModel = require('./salaries')
const internalPersonnelTasksModel = require('./internalPersonnelTasks')
const jobPostingFeesModel = require('./jobPostingFees')
const miscFixedCostsModel = require('./miscFixedCosts')
const miscVariableCostsModel = require('./miscVariableCosts')
const OAFProgramPricingsModel = require('./OAFProgramPricings')
const userInputsModel = require('./userInputs')


const connection = new Sequelize('openAve', 'openAve', 'C0$tL0$$C4lc', {
  host: 'localhost', dialect: 'mysql',
})

const averageRecruiterFees = averageRecruiterFeesModel(connection, Sequelize)
const avgSigningBonuses = avgSigningBonusesModel(connection, Sequelize)
const salaries = salariesModel(connection, Sequelize)
const internalPersonnelTasks = internalPersonnelTasksModel(connection, Sequelize)
const jobPostingFees = jobPostingFeesModel(connection, Sequelize)
const miscFixedCosts = miscFixedCostsModel(connection, Sequelize)
const miscVariableCosts = miscVariableCostsModel(connection, Sequelize)
const OAFProgramPricings = OAFProgramPricingsModel(connection, Sequelize)
const userInputs = userInputsModel(connection, Sequelize)


salaries.hasMany(internalPersonnelTasks)
internalPersonnelTasks.belongsTo(salaries)

module.exports = {
  averageRecruiterFees,
  avgSigningBonuses,
  salaries,
  internalPersonnelTasks,
  jobPostingFees,
  miscFixedCosts,
  miscVariableCosts,
  OAFProgramPricings,
  userInputs,
}
