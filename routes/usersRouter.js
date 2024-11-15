// routes/usersRouter.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Route to render the home page
router.get("/", usersController.homePage);

// Route to get all usernames
router.get("/usernames", usersController.getUsernames);

// Route to display the form to create a new username
router.get("/new", usersController.createUsernameGet);

// Route to handle form submission and insert a new username
router.post("/new", usersController.createUsernamePost);

module.exports = router;
