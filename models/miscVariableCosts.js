const miscVariableCosts = (connection, Sequelize) => connection.define('miscVariableCosts', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  percentCost: { type: Sequelize.DECIMAL(3, 2) },
}, {
  paranoid: true,
})
module.exports = miscVariableCosts
