require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors =require('cors')

app.use(
  express.urlencoded({
    extended: true,
  })
  )
  app.use(cors())
  app.use(express.json())

  const patientRoutes = require('./routes/patientRoutes')
  app.use('/patient' , patientRoutes)
const consultRoutes = require('./routes/consultRoutes')
app.use('/consult', consultRoutes)
  const helthInsuranceRoutes = require('./routes/helthInsuranceRoutes')
  app.use('/helthInsurance', helthInsuranceRoutes)


const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD) 

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vhaa3wv.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(3000)
})
  .catch((err) => console.log(err))
