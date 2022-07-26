function CheckEmailAndName(req, res, next){
    if(!(Object.keys(req.body).includes("email") && Object.keys(req.body).includes("name"))){
        return res.status(400).json({message:"bad request"})
    }
    next()
}

module.exports = {
    CheckEmailAndName
}