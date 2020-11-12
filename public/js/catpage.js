
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


            let show = myShows[Math.floor(Math.random() * myShows.length)];
// API Array
apiArray=['giphy', 'bing', 'pictures', 'youtube']



// The selected categories are stored in the userCat table in MYSQL database

// On click Randomly selects an item from each of the  respective arrays of selected categories

      const chosenTv = tv[Math.floor(Math.random() * tv.length)];

      const chosenToys= toys[Math.floor(Math.random() * toys.length)];

      const chosenVideoGames= videoGames[Math.floor(Math.random() * videoGames.length)];

      const chosenelectronics= electronis[Math.floor(Math.random() * electronics.length)];

      const chosenBooks= books[Math.floor(Math.random() * books.length)];

      const choseSnacks= snacks[Math.floor(Math.random() * snacks.length)];

      const chosenMusic= music[Math.floor(Math.random() * music.length)];

      const lisaFrank

// On click Randomy selects an API from an API array

chosenApi= apiArray[Math.floor(Math.random() * apiArray.length)];

// use foreach for all of the items in the catName column of the userCat table

// Function : Takes in the category as the parameter
   // 1) loops through category items from the userCat table 

   // 2) Loops through the 

// An array of selected options is created 

// 