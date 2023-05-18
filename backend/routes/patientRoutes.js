const router = require('express').Router()

const Patient = require('../models/Patient')



router.post('/', async (req, res) => {
    const { name, email, insurance, status, sex, contact, born, } = req.body

    const patient = {
        name,
        email,
        insurance,
        status,
        sex,
        contact,
        born
    }

    try {
        await Patient.create(patient)

        res.status(201).json({  message: 'Paciente inserido no sistema com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/', async (req, res) => {
    try {
        const patient = await Patient.find()

        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const patient = await Patient.findOne({ _id: id })

        if (!patient) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { name,
        email,
        insurance,
        status,
        sex,
        contact,
        born, } = req.body

    const patient = {
        name,
        email,
        insurance,
        status,
        sex,
        contact,
        born,
    }

    try {
        const updatedPatient = await Patient.updateOne({ _id: id }, patient)

        if (updatedPatient.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const patient = await Patient.findOne({ _id: id })

    if (!patient) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await Patient.deleteOne({ _id: id })

        res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/', (req, res) => {

    res.json({ message: "Hello Express!" })

})

module.exports =  router