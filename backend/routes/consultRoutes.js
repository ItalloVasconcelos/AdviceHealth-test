const router = require('express').Router()

const Consult = require('../models/Consult')



router.post('/', async (req, res) => {
    const { date, start, insurance,  } = req.body

    const consult = {
        date, start, insurance, 
    }

    try {
        await Consult.create(consult)

        res.status(201).json({ message: 'Consulta criada no sistema com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/', async (req, res) => {
    try {
        const consult = await Consult.find()

        res.status(200).json(consult)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    console.log(req)
})
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const consult = await Consult.findOne({ _id: id })

        if (!consult) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(consult)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const {  date, start, insurance,  } = req.body

    const consult = {
        date, start, insurance, 
    }

    try {
        const updatedPatient = await Consult.updateOne({ _id: id }, consult)

        if (updatedPatient.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(consult)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const consult = await Consult.findOne({ _id: id })

    if (!consult) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await Consult.deleteOne({ _id: id })

        res.status(200).json({ message: 'Consulta removida com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/', (req, res) => {

    res.json({ message: "Hello Express!" })

})

module.exports = router