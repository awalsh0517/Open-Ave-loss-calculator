const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { getAllSalaries } = require('./controllers/salaries')
const { getAllAverageRecruiterFees } = require('./controllers/averageRecruiterFees')
const { getAllAvgSigningBonuses } = require('./controllers/avgSigningBonuses')
const { getAllInternalPersonnelTasks } = require('./controllers/internalPersonnelTasks')
const { getAllJobPostingFees } = require('./controllers/jobPostingFees')
const { getAllMiscFixedCosts } = require('./controllers/miscFixedCosts')
const { getAllMiscVariableCosts } = require('./controllers/miscVariableCosts')
const { getAllOAFProgramPricings } = require('./controllers/OAFProgramPricings')
const { getAllUserInputs, postUserInputs } = require('./controllers/userInputs')

const app = express()

app.use(express.static('public'))

app.get('/salaries', getAllSalaries)
app.get('/averageRecruiterFees', getAllAverageRecruiterFees)
app.get('/avgSigningBonuses', getAllAvgSigningBonuses)
app.get('/internalPersonnelTasks', getAllInternalPersonnelTasks)
app.get('/jobPostingFees', getAllJobPostingFees)
app.get('/miscFixedCosts', getAllMiscFixedCosts)
app.get('/miscVariableCosts', getAllMiscVariableCosts)
app.get('/OAFProgramPricings', getAllOAFProgramPricings)
app.get('/userInputs', getAllUserInputs)

app.post('/userInputs', bodyParser.json(), postUserInputs)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('listening on port 1337...') // eslint-disable-line no-console
})
