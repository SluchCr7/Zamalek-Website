const { register , Login , UpdateUser ,DeleteUser , getAllUsers} = require("../controllers/auth")
const express = require("express")
const route = express.Router()

route.route("/register")
    .post(register)

route.route("/login")
    .post(Login)

route.route("/:id")
    .delete(DeleteUser)
    .put(UpdateUser)

route.route("/")
    .get(getAllUsers)
module.exports = route
