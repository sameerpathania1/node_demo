const express = require("express");
const app = express()
const PORT = "3001"

require("./startups/middleware")(app)
require("./startups/routes")(app)

app.listen(PORT, () => console.log(`connected to port ${PORT}`))