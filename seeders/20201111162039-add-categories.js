'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [{
      catName: 'arts',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    {
      catName: 'history',
      createdAt: new Date(),
      updatedAt: new Date()
  
    }


  
  ], {});
  },



  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

 



    