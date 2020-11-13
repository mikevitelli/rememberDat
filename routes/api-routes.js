// Requiring our models and passport as we've configured it
const isAuthenticated=require('../config/middleware/isAuthenticated')
const db = require("../models");
const passport = require("../config/passport");
const bingImageSearch = require("../services/bing");
const user = require('../models/user');



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

  app.get("/api/services/bing", (req, res) => {
    console.log(bingImageSearch("90s").then(res => res));
    res.json(bingImageSearch("90s"));
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

app.post("/api/users/addcategory", isAuthenticated, (req, res)=>{
console.log ("adding category")
console.log('user', req.user)



// Find a user and obtain id


 db.User.findOne({

  where: {
    id:req.user.id
  },
  include: [db.Category]

 }).then(function(user) {
   db.Category.findOne({
     where: {
       catName: "music"
     }
   }).then(category => {

    user.addCategory(category )

    res.json(user)
   })

 



  })
});


//  // POST route for saving a new todo
//  app.post("/api/todos", function(req, res) {
//   console.log(req.body);
//   // create takes an argument of an object describing the item we want to
//   // insert into our table. In this case we just we pass in an object with a text
//   // and complete property (req.body)
//   db.Todo.create({
//     text: req.body.text,
//     complete: req.body.complete
//   }).then(function(dbTodo) {
//     // We have access to the new todo as an argument inside of the callback function
//     res.json(dbTodo);
//   });
// });




};

