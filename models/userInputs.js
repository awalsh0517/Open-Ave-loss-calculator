const userInputs = (connection, Sequelize) => {
  return connection.define('userInputs', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    userFullName: { type: Sequelize.INTEGER },
    userEmail: { type: Sequelize.INTEGER },
    timePeriodStart: { type: Sequelize.DATEONLY },
    timePeriodEnd: { type: Sequelize.DATEONLY },
    companyIndustry: { type: Sequelize.STRING },
    EIROccSpec: { type: Sequelize.STRING },
    EIRJobTitle: { type: Sequelize.STRING },
    laborNAICSCode: { type: Sequelize.STRING },
    DOLAnnualSalary: { type: Sequelize.DECIMAL(8, 2) },
    DOLHourlySalary: { type: Sequelize.DECIMAL(6, 2) },
    weeklyHours: { type: Sequelize.INTEGER },
    OESSOCCode: { type: Sequelize.STRING },
    EIRDegree: { type: Sequelize.STRING },
    isExternalRecruiterUsed: { type: Sequelize.BOOLEAN },
    isOfferedSigningBonus: { type: Sequelize.BOOLEAN },
    isOfferedRelocationBonus: { type: Sequelize.BOOLEAN },
  }, {
    paranoid: true,
  })
}
module.exports = userInputs
