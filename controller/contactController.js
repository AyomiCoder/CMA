// @desc get all contact
// @route GET api/contact
// @access public

const getContacts = (req, res)=>{
    res.json({message: "Get all contacts"})
}

module.exports = { getContact };