const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel')

// @desc get all contact
// @route GET api/contact
// @access public

const getContacts = asyncHandler( async (req, res)=>{
    const contacts = await Contact.find();
    res.json(contacts);
});


// @desc Create contact
// @route CREATE api/contact
// @access public

const createContact = asyncHandler(
    async (req, res)=>{
        const {name, email, phone} = req.body;
        if (!name || !email || !phone){
            res.status(400);
            throw new Error('All fields are mandatory');
        };
        const contact = await Contact.create({
            name,
            email,
            phone,
        });
        res.json(contact)
    }) 


// @desc get single contact
// @route GET api/contact/:id
// @access public

const getContact = asyncHandler( async (req, res)=>{
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
            throw new Error("Contact not found")
        }
        res.json(contact)
    }) 

// @desc Update contact
// @route PUT api/contact/:id
// @access public

const updateContact = asyncHandler( async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
        res.json(updatedContact)
})

// @desc Delete contact
// @route DELETE api/contact/:id
// @access public

const deleteContact = asyncHandler( async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.remove()
        res.json(contact)
    }
) 

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
