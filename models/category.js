


module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("Category", {

    
        
     catName: {
        type: DataTypes.STRING,
        allowNull: true
      },

    });
   
 Category.associate=function(models) {
    Category.belongsToMany(models.User, { through: 'userCat' });
 }

  

    return Category
  };