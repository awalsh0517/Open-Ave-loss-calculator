const jobPostingFees = (connection, Sequelize) => connection.define('jobPostingFees', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  service: { type: Sequelize.STRING },
  cost: { type: Sequelize.INTEGER },
}, {
  paranoid: true,
})
module.exports = jobPostingFees
