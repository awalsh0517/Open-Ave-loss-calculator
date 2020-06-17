const internalPersonnelTasks = (connection, Sequelize, salaries) => connection.define('internalPersonnelTasks', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  taskGroup: { type: Sequelize.ENUM('Exit', 'RnH', 'OnBoarding') },
  name: { type: Sequelize.STRING },
  hoursSpent: { type: Sequelize.INTEGER },
  salaryId: { type: Sequelize.INTEGER, references: { model: salaries, key: 'id' } },
}, {
  paranoid: true,
})
module.exports = internalPersonnelTasks
