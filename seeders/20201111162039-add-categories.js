"use strict";


module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD

  // Note that I am using categories here instead of category because the MYSQL database automatically changes the table name to categories
  
    await queryInterface.bulkInsert('categories', [

      {
        catName: 'tv',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    {
      catName: 'toys',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    {
      catName: 'videoGames',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },

    {
      catName: 'electronics',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },

    {
      catName: 'books',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },

    {
      catName: 'snacks',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },
    

    {
      catName: 'music',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },


    {
      catName: 'lisaFrank',
      createdAt: new Date(),
      updatedAt: new Date()
  
    },
  
  ], {}); // closing brackets for the array and additional brackets for any option
  }, // closing br for async



  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }


}; //closing br for the modules

 



    
=======
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          catName: "arts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          catName: "history",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
>>>>>>> e6a4273338a05178e16926faf10fa15f3bbbfe1f
