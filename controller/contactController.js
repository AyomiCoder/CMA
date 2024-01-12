const asyncHandler = require('express-async-handler')

// @desc get all contact
// @route GET api/contact
// @access public

const getContacts = asyncHandler(
    async (req, res)=>{
    res.json({message: "Get all contacts"})
});

// @desc get all contact
// @route GET api/contact/:id
// @access public

const getContact = asyncHandler(
    async (req, res)=>{
        res.json({message: "Get single contact"})
    }
) 

// @desc Create contact
// @route CR api/contact
// @access public

const createContact = asyncHandler(
    async (req, res)=>{
        console.log(req.body)
        const {name, email, phone} = req.body;
        if (!name || !email || !phone){
            res.status(400);
            throw new Error('All fields are mandatory');
        };
        res.json({message: "Create contact"})
    }
) 

// @desc Update contact
// @route PUT api/contact/:id
// @access public

const updateContact = asyncHandler(
    async (req, res)=>{
        res.json({message: `Update contact for ${req.params.id}`})
    }
) 

// @desc Delete contact
// @route DELETE api/contact/:id
// @access public

const deleteContact = asyncHandler(
    async (req, res)=>{
        res.json({message: `Update contact for ${req.params.id}`})
    }
) 

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
