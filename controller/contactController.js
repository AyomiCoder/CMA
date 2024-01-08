// @desc get all contact
// @route get api/contact
// @access public

const getContact = (req, res)=>{
    res.json({message: "Get all contacts"})
}

module.exports = { getContact };