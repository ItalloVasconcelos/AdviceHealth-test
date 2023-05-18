const mongoose = require('mongoose')

const Consult = mongoose.model('Consult', {
    date: String,
    start: String,
    insurance: String,
})
module.exports = Consult


