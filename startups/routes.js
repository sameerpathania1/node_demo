const userRoutes = require("../routes/userRoutes")

module.exports = (app) => {
    app.use("/user", userRoutes)
}
