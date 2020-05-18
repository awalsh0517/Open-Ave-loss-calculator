const OAFProgramPricings = (connection, Sequelize) => {
  return connection.define('OAFProgramPricings', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    feeName: { type: Sequelize.STRING},
    feeValue: { type: Sequelize.INTEGER },
    feeRecurrsions: { type: Sequelize.INTEGER }
  }, {
    paranoid: true,
  })
}
module.exports = OAFProgramPricings