const mongoose = require('mongoose')
const HelthInsurance = mongoose.model('HelthInsurance', {
    helthPlan: String,
    agreementName: String,
    rg: String,
    cpf: String,
    occupation: String,
    adress: String,
    naibor: String,
    city: String,
    state: String,
    cep: String,
})
module.exports = HelthInsurance