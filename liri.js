require("dotenv").config();
var Spotify = require("node-spotify-api");//songs
var moment = require("moment");//
var request = require("request");//movies
var keys = require("./keys.js")
var fs = require("fs")

var spotify = new Spotify(keys.spotify);

let operation = process.argv[2];
console.log(operation)
let term = process.argv[3];
Main()
function Main() {
  switch (operation) {
    case "movie":
      if (term) {
        OMDBmovie(term)
      } else {
        term = "Mr. Nobody";
        OMDBmovie(term)
      }
      break;
    case "concert":
      concertThis(term)
      break
    case "spotify-this-song":
      if (term) {
        spotifyThis(term)
      } else {
        term = "The sign"
        spotifyThis(term)
      }
      break
    case "do_This":
      fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
        var dataArr = data.split(",");
        operation = dataArr[0];
        term = dataArr[1];
        Main()
      })
      break
  }
}
function OMDBmovie(movie) {
  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (err, response, body) {
    if (!err && response.statusCode === 200) {
      let rating = "N/A"
      if (JSON.parse(body).Ratings[1]) {
        rating = JSON.parse(body).Ratings[1].Value;
      }

      // console.log(JSON.parse(body))
      console.log("The Title of the movie is: " + JSON.parse(body).Title);
      console.log("Year the movie came out: " + JSON.parse(body).Year);
      console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating of the movie: " + rating);
      console.log("Country where the movie was produced: " + JSON.parse(body).Country);
      console.log("Language of the movie: " + JSON.parse(body).Language);
      console.log("Plot of the movie: " + JSON.parse(body).Plot);
      console.log("Actors in the movie: " + JSON.parse(body).Actors);
      // when i am trying to print rotten tomatoes ratings some movies are giving error is it okay???????
    }
  })
}
// why are we passing 3 arguments in functions? why we need body
function concertThis(artist) {
  request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (err, response, body) {
    if (!err && response.statusCode === 200) {
      var con = JSON.parse(body)
      for (let i = 0; i < con.length; i++) {
        console.log(con[i]);
        console.log("venue::::" + con[i].venue.name)
      }
    }
  })
}
function spotifyThis(song) {

  console.log(song);
  spotify.search({ type: 'track', query: song }, function (err, data) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var resp = data
    console.log("==================================")
    console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
    console.log("==================================")
    console.log("Song name: " + data.tracks.items[0].name);
    console.log("==================================")
    console.log("Preview Url: " + data.tracks.items[0].preview_url);
    console.log("==================================")
    console.log("album name: " + data.tracks.items[0].album.name);

    // // console.log(data)
  });
}