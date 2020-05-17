const miscFixedCosts = (connection, Sequelize) => {
  return connection.define('miscFixedCosts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING},
    cost: { type: Sequelize.INTEGER },
  }, {
    paranoid: true,
  })
}
module.exports = miscFixedCosts