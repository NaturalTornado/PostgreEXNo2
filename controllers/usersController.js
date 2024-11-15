const db = require("../db/queries");

async function homePage(req, res) {
  // This could render a home page view, for now, we're just sending a simple message.
  res.send("Welcome to the Home Page!");
}

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form for creating a new username
  res.send(`
    <form action="/new" method="POST">
      <input type="text" name="username" placeholder="Enter username" required />
      <button type="submit">Submit</button>
    </form>
  `);
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/"); // Redirect to the home page after submission
}

module.exports = {
  homePage,
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
