const express = require('express');
const router = express.Router()
const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controller/contactController')

// to get all contacts
router.route('/').get(getContacts).post(createContact);

//Get a single contact by ID
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

// //to create a contact
// router.route('/')

// // Update a contact
// router.route('/:id')

// //delete a contact
// router.route('/:id')


module.exports = router