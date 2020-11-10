module.exports = function(sequelize, DataTypes) {
    const Category = sequelize.define("category", {
      // The email cannot be null, and must be a proper email before creation
      arts: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },


      business: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      
      cars: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      education: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      family: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      fashion: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      food: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      health: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      history: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      hobbies: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      homeGarden: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      humor: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      literature: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

        living: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      media: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      music: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      nature: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      outdoors: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      politics: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      science: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      society: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      sports: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      technology: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      travel: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },

      world: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },



    });
   
  
    Category.belongsToMany(user, { through: 'userCat' });




  };