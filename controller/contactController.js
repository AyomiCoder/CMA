// @desc get all contact
// @route GET api/contact
// @access public

const getContacts = (req, res)=>{
    res.json({message: "Get all contacts"})
}

// @desc get all contact
// @route GET api/contact/:id
// @access public

const getContact = (req, res)=>{
    res.json({message: "Get single contact"})
}

// @desc Create contact
// @route CR api/contact
// @access public

const createContact = (req, res)=>{
    console.log(req.body)
    res.json({message: "Create contact"})
}

// @desc Update contact
// @route PUT api/contact/:id
// @access public

const updateContact = (req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
}

// @desc Delete contact
// @route DELETE api/contact/:id
// @access public

const deleteContact = (req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
