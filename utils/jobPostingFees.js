/* eslint-disable import/prefer-default-export */
const { getJobPostingFees } = require('../actions/costs')


const jobPostingFees = async () => {
  const { data } = await getJobPostingFees()

  const jobPostingFeeTotal = await data.reduce((total, current) => (current.cost ? total + current.cost : total + 0), 0)
  return jobPostingFeeTotal
}

module.exports = jobPostingFees
