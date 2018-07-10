require("dotenv").config();
var app = require('./app');
var request = require("request");
var http = require("https");

var twitter = require('twitter');
var spotify= require('node-spotify-api');

var spotify = new spotify(app.spotify);
var client = new twitter(app.twitter);

let command = process.argv[2];

switch (command) {
    case `my-tweets`:
        let screen_name = process.argv[3]; 
        let tweetsArr = [];
        //This will show your last 20 tweets and when they were created at in your terminal/bash window.
        // client.get(path, params, callback);
         client.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screen_name}&count=20`, function(error, tweets, response) {
        if(error) throw error;
        //console.log(tweets);  // The tweets.
        
        for (var i = 0; i < tweets.length; i++){
            //tweetsArr.push(tweets)
            console.log(tweets[i].created_at);
            console.log(tweets[i].text);
        }
        }); 
       // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
        
        break;

    case `spotify-this-song`:    
            let song = process.argv.slice(3).join(" ");
         spotify.search({ type: 'track', query: song }, function(err, data) {
         if (err) {
         return console.log('Error occurred: ' + err);
         }
       
        //console.log(data); 
        
        console.log(`This song is by ${data.tracks.items[0].artists[0].name} `);
        console.log(`The name of this song is ${data.tracks.items[0].name} `);
        console.log(`The album for this song is ${data.tracks.items[0].album.name}`);
        console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
        }); 
        
        /* This will show the following information about the song in your terminal/bash window
     
        * Artist(s)
        
        * The song's name
        
        * A preview link of the song from Spotify
        
        * The album that the song is from
   
      * If no song is provided then your program will default to "The Sign" by Ace of Base. */
        break;
        
    case `movie-this`: 
    let movie = process.argv[3];

    // Then run a request to the OMDB API with the movie specified
    request(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

        
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    var body = JSON.parse(body)
    console.log(body.Title);
    console.log(body.Year);
    for (i = 0; i < 1; i++){
        console.log("IMDB rating: " +(body.Ratings[0].Value));
        console.log("Rotten Tomatoes rating is: " +(body.Ratings[1].Value));
    }
    console.log(body.Country);
    console.log(body.Plot);
    console.log(body.Actors);
    console.log(body.Language);
    }
    });
    /* This will output the following information to your terminal/bash window:

    ```
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie. 
      *  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*/
        
        break;
    case `do-what-it-says`:
        execute; /* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
        * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
        
        * Feel free to change the text in that document to test out the feature for other commands.
        */
        break;

}