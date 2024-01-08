const express = require('express');
const router = express.Router
const { getContact } = require('../controller/contactController')

// to get all contact
router.route('/').get(getContact)

//to create a contact
router.route('/').post((req, res)=>{
    res.json({message: "Create contact"})
})


//Get a single contact by ID
router.route('/:id').get((req, res)=>{
    res.json({message: `Get single contact for ${req.params.id}`})
})


// Update a contact
router.route('/:id').put((req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
})


//delete a contact
router.route('/:id').delete((req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
})


module.exports = router