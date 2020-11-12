// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// const giphy = require("../services/giphy.js");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  
app.post("/api/category/", function(req, res) {
  db.Category.create(
    {
    catName:userCatChoice.catName, 
    }

  ).then(function(dbCategory) {
    res.json(dbCategory);
  });
}); //closing br for post request


app.post("/api/users/addcategory", function(req, res) {
  console.log("user:", req.user)

  // db.User.findOne({
  //   where: {
  //     id: req.user.id
  //   },
  //   include: [db.Category.catName]
  // }).then(function(dbCategory) {
  //   res.json(dbCategory);
  // });
}); // closing br post request




}; // closing br for the app function

