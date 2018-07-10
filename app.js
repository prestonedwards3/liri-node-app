require('dotenv').config()

var twitter = require('twitter');
var spotify= require('node-spotify-api')

console.log('this is loaded');



exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

 
/* var spotify = new Spotify({
  id: "8810d0bd9abe451292ef10feef55c35c",
  secret: "c165cf84b6bf4ef8af4422e73b6ebdbb"
});
 
var client = new Twitter({
  consumer_key: 'sDHk6ITPBabWhjFqesEBn34eq',
  consumer_secret: 'P5J0YqyMIZZWStxpUws3jReyxj5EQxM09RHDxIP3M5dxgogqjC',
  access_token_key: '377097801-zI7XWYmPL6XSi3Iheyh7OVIBmISe7ICMwvBfq3xW',
  access_token_secret: 'JpbklRhcdYxsFqBVb4BTeoR1HGuoMAP2soYxvjAP4G6nt'
});
 */

TWITTER_CONSUMER_KEY= 'sDHk6ITPBabWhjFqesEBn34eq';
TWITTER_CONSUMER_SECRET= 'P5J0YqyMIZZWStxpUws3jReyxj5EQxM09RHDxIP3M5dxgogqjC';
TWITTER_ACCESS_TOKEN_KEY= '377097801-zI7XWYmPL6XSi3Iheyh7OVIBmISe7ICMwvBfq3xW';
TWITTER_ACCESS_TOKEN_SECRET= 'JpbklRhcdYxsFqBVb4BTeoR1HGuoMAP2soYxvjAP4G6nt';

SPOTIFY_ID= "8810d0bd9abe451292ef10feef55c35c";
SPOTIFY_SECRET= "c165cf84b6bf4ef8af4422e73b6ebdbb";

