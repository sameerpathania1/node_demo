const express = require("express")
const router = express.Router()
const userController = require("../controllers/userControllers")

function validateUser(req, res, next) {
    next()
}

router.get("/", userController.getUser)
router.post("/", validateUser, userController.createdUser)

module.exports = router