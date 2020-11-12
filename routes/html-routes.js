// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the content landing page
    if (req.user) {
      res.redirect("/content-landing.html");
    }
    // if not take them to the signup page
    res.sendFile(path.join(__dirname, "../pages/startpage.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/content-landing.html");
    }
    res.sendFile(path.join(__dirname, "../pages/login.html"));
  });

  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/signup.html"));
  });

  app.get("/content-landing", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/content-landing.html"));
  });

  app.get("/categories", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/categories.html"));
  });
};
