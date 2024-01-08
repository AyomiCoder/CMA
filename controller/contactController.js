// @desc get all contact
// @route get api/contact
// @access public

const getContacts = (req, res)=>{
    res.json({message: "Get all contacts"})
}

module.exports = { getContacts };