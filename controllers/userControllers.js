
const getUser = (req, res, next) => {
    res.send({ message: "user fetched success" })
}

const createdUser = (req, res, next) => {
    console.log(req.body, "requested data")
    res.send({ message: "user created success" })
}

module.exports = {
    getUser,
    createdUser
}