const averageRecruiterFees = (connection, Sequelize) => {
  return connection.define('averageRecruiterFees', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    majorDiscipline: { type: Sequelize.STRING, },
    avgFeePercent: { type: Sequelize.DECIMAL(3,2) }
  }, {paranoid: true } );
}

module.exports = averageRecruiterFees
