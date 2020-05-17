const salaries = (connection, Sequelize) => {
  return connection.define('salaries', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING},
    hourlyRate: { type: Sequelize.DECIMAL(6,2) },
  }, {
    paranoid: true,
  })
}
module.exports = salaries
