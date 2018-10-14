# Liri-Bot
## 1. Description of the LIRI-Bot app
      Welcome to LIRI-Bot app, LIRI-Bot is similar to the iphone's SIRI.  However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. ( Note: install the required npm packages at beginning by typing **npm install** command )
      LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
      In this app we'll be retrieving the data from 3 API's( Bands in town, OMDB, and Spotify) by using LIRI-Bot.
      It can take one of folowing four commands
       1. concert
       2. spotify-this-song
       3. movie
       4. do-This
       
## 2. How it works
      a. To search a song/music:
          Type in **node liri.js spotify-this-song <your song name goes here>**
          This will show the following information about the song in your terminal/bash window
          Artist(s)
          * The song's name
          * A preview link of the song from Spotify
          * The album that the song is from
      b. To search a movie:
          Type in **node liri.js movie '<movie name here>'**
          This will output the following information to your terminal/bash window:
          * Title of the movie.
          * Year the movie came out.
          * IMDB Rating of the movie.
          * Rotten Tomatoes Rating of the movie.
          * Country where the movie was produced.
          * Language of the movie.
          * Plot of the movie.
          * Actors in the movie.
       c. To search about the concerts/bands in town:
          Type in **node liri.js concert <artist/band name here>**
          This will search the Bands in Town Artist Events API for that artist and render the following information to the terminal:
          * Name of the venue
          * Venue location
          * Date of the Event (use moment to format this as "MM/DD/YYYY")
       d. To do what random.txt says:
          Type in **node liri.js do-This**
          LIRI will take the text inside of random.txt and then use it to call one of four LIRI's commands, whichever is written into the random.txt file, and it will provide the information accordingly.
          You can edit the text in random.txt file to check other commands.

          