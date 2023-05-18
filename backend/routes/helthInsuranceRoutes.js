const router = require('express').Router()

const HelthInsurance = require('../models/HelthInsurance')



router.post('/', async (req, res) => {
    const { helthPlan, agreementName, rg, cpf, occupation, adress, naibor, city, state, cep } = req.body

    const helthInsurance = {
        helthPlan,
        agreementName,
        rg,
        cpf,
        occupation,
        adress,
        naibor,
        city,
        state,
        cep,
    }

    try {
        await HelthInsurance.create(helthInsurance)

        res.status(201).json({ message: 'Informações do plano inseridas no sistema com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/', async (req, res) => {
    try {
        const helthInsurance = await HelthInsurance.find()

        res.status(200).json(helthInsurance)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const helthInsurance = await HelthInsurance.findOne({ _id: id })

        if (!helthInsurance) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(helthInsurance)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { helthPlan, agreementName, rg, cpf, occupation, adress, naibor, city, state, cep } = req.body

    const helthInsurance = {
        helthPlan,
        agreementName,
        rg,
        cpf,
        occupation,
        adress,
        naibor,
        city,
        state,
        cep,
    }

    try {
        const updatedHelthInsurance = await HelthInsurance.updateOne({ _id: id }, helthInsurance)

        if (updatedHelthInsurance.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(helthInsurance)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const helthInsurance = await HelthInsurance.findOne({ _id: id })

    if (!helthInsurance) {
        res.status(422).json({ message: 'Usuário não encontrado!' })
        return
    }

    try {
        await HelthInsurance.deleteOne({ _id: id })

        res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


module.exports = router