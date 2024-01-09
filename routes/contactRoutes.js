const express = require('express');
const router = express.Router
const { getContact, createContact, updateContact, deleteContact } = require('../controller/contactController')

// to get all contact
router.route('/').get(getContact)

//to create a contact
router.route('/').post(createContact)


//Get a single contact by ID
router.route('/:id').get(getContact)


// Update a contact
router.route('/:id').put(updateContact)


//delete a contact
router.route('/:id').delete(deleteContact)


module.exports = router