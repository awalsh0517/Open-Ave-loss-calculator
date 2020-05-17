const avgSigningBonuses = (connection, Sequelize) => {
  return connection.define('avgSigningBonuses', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    companyName: { type: Sequelize.STRING},
    cost: { type: Sequelize.INTEGER },
  }, {
    paranoid: true,
  })
}
module.exports = avgSigningBonuses