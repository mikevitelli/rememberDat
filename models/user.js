// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    arts:{
     type: DataTypes.STRING,
     default:'0',
    },

    business:{
      type: DataTypes.STRING,
      default:'0',
     },
 
     cars:{
      type: DataTypes.STRING,
      default:'0',
     },

     cars:{
      type: DataTypes.STRING,
      default:'0',
     },

     education:{
      type: DataTypes.STRING,
      default:'0',
     },
  
     family:{
      type: DataTypes.STRING,
      default:'0',
     },

    fashion:{
      type: DataTypes.STRING,
      default:'0',
     },

     food:{
      type: DataTypes.STRING,
      default:'0',
     },

     health:{
      type: DataTypes.STRING,
      default:'0',
     },
 
     history:{
      type: DataTypes.STRING,
      default:'0',
     },

     hobbies:{
      type: DataTypes.STRING,
      default:'0',
     },

     homeGarden:{
      type: DataTypes.STRING,
      default:'0',
     },

     humor:{
      type: DataTypes.STRING,
      default:'0',
     },

     literature:{
      type: DataTypes.STRING,
      default:'0',
     },

     living:{
      type: DataTypes.STRING,
      default:'0',
     },

     media:{
      type: DataTypes.STRING,
      default:'0',
     },

     music:{
      type: DataTypes.STRING,
      default:'0',
     },

     nature:{
      type: DataTypes.STRING,
      default:'0',
     },

     outdoors:{
      type: DataTypes.STRING,
      default:'0',
     },

     politics:{
      type: DataTypes.STRING,
      default:'0',
     },

     science:{
      type: DataTypes.STRING,
      default:'0',
     },

     society:{
      type: DataTypes.STRING,
      default:'0',
     },

     sports:{
      type: DataTypes.STRING,
      default:'0',
     },

     technology:{
      type: DataTypes.STRING,
      default:'0',
     },

     travel:{
      type: DataTypes.STRING,
      default:'0',
     },

     world:{
      type: DataTypes.STRING,
      default:'0',
     }

  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
