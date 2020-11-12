
// Obtaining the category name when a button is clicked


  




// Arrays
// Category array
            tv=[]
            toys=[]
            videoGames=[]

            electronics=[ 'gameboy color', 'nintendo 64', 'sega dreamcast', 'apple quicktake', 'walkman', 'motorola starTAC', 'apple messagepad', 'apple emate300', 'george foreman grill', 'nokia 8110', 'nokia 5110', 'polarid 600']

            books=['goose bumps', 'r. l. stine', 'bunnicula', 'the rainbow fish', 'oh, the places you will go', 'a bad case of stripes', 'shel silverstein', 'captain underpants']

            snacks=['wonder ball', 'push pops', 'drunkagroos', 'bubble job', 'squeeze pop', 'fruit rollups', 'mcdonalds happy meal', 'cafe boyardee', 'oreos cereal', 'spaghettios', 'sunny D', 'tang']

            music=['nirvana', 'spice girls', 'radio head', 'pearl jam', 'lauryn hill', 'a tribe called quest', 'nysnc', 'backstreet boys', 'foo fighters', 'korn', 'destinys child', 'smash mouth', 'green day', 'whitney houston', 'wu-tang', 'disable planets']

            lisaFrank


           
// API Array
apiArray=['giphy', 'bing', 'pictures', 'youtube']



// The selected categories are stored in the userCat table in MYSQL database

// On click Randomly selects an item from each of the  respective arrays of selected categories

      const randomTv = tv[Math.floor(Math.random() * tv.length)];

      const randomToys= toys[Math.floor(Math.random() * toys.length)];

      const randomVideoGames= videoGames[Math.floor(Math.random() * videoGames.length)];

      const randomlectronics= electronis[Math.floor(Math.random() * electronics.length)];

      const randomBooks= books[Math.floor(Math.random() * books.length)];

      const randomSnacks= snacks[Math.floor(Math.random() * snacks.length)];

      const randomMusic= music[Math.floor(Math.random() * music.length)];

      const lisaFrank





     randomTv = tv[Math.floor(Math.random() * tv.length)];

// use foreach for all of the items in the catName column to run the following function
 function searchApi(randomCat) {


        // Randomly selects the api 

        chosenApi= apiArray[Math.floor(Math.random() * apiArray.length)];
    
        // Get request from MYSQL database to obtain values from the catName column of the userCat table
    
       // function that randomly obtains value from the respective category array from the MYSQL list of categories by the user


    // transfers that randomly selected value  based on user choice to the 
    // On click Randomy selects an API from an API array



 }


// 