'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


     await queryInterface.bulkInsert('categories', [
       {
        
          catName: 'tv',
          createdAt: new Date(),
          updatedAt: new Date()
        
     },



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

}


    
    ], {});
    
  },

  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }
};

