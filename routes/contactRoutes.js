const express = require('express');
const router = express.Router
const { getContact } = require('../controller/contactController')

router.route('/').get(getContact)

router.route('/').post((req, res)=>{
    res.json({message: "Create contact"})
})

router.route('/:id').get((req, res)=>{
    res.json({message: `Get single contact for ${req.params.id}`})
})

router.route('/:id').put((req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
})

router.route('/:id').delete((req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
})


module.exports = router