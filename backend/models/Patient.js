const mongoose = require('mongoose')

const Patient = mongoose.model('Patient', {
    name: String,
    email: String,
    insurance: String,
    status: String,
    sex: String,
    contact: String,
    born: String,
})
module.exports = Patient
