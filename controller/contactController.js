// @desc get all contact
// @route GET api/contact
// @access public

const getContact = (req, res)=>{
    res.json({message: "Get all contacts"})
}

// @desc Create contact
// @route POST api/contact
// @access public

const createContact = (req, res)=>{
    res.json({message: "Create contact"})
}

// @desc Update contact
// @route POST api/contact
// @access public

const updateContact = (req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
}

// @desc Delete contact
// @route POST api/contact
// @access public

const deleteContact = (req, res)=>{
    res.json({message: `Update contact for ${req.params.id}`})
}

module.exports = { getContact, createContact, updateContact, deleteContact };


module.exports = { getContact };