require("dotenv").config();
var keys = require("./keys")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");
var moment = require('moment');

var input = process.argv[2]
var query = process.argv[3]

for (var i = 0; i < input.length; i++) {
    input = input.replace("-", "")
}

var methods = {
    //  ------------------ BANDS IN TOWN ------------------
    // node liri.js concert-this <artist/band name here>
    concertthis: function () {
        if (!query) {
            query = "Beartooth"
        }
        var queryUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp"

        request(queryUrl, function (error, response, data) {

            if (!error && response.statusCode === 200) {
                var bandReturn = JSON.parse(data)

                for (let i = 0; i < bandReturn.length; i++) {
                    var event = bandReturn[i]
                    console.log("\n" + query + "\nVenue: " + event.venue.name + "\nCity: " + event.venue.city + "\nDate: " + moment(event.datetime).format("MM/DD/YYYY"))
                }
            }
        });
    },
    //  ------------------ SPOTIFY ------------------
    //node liri.js spotify-this-song '<song name here>'
    spotifythissong: function () {
        if (!query) {
            query = "The Sign"
        }
        spotify.search({
            type: 'track',
            query: query
        }, function (error, data) {
            if (!error) {
                var spotifyReturn = data.tracks.items

                for (let i = 0; i < spotifyReturn.length; i++) {
                    console.log("\nArtist: " + spotifyReturn[i].album.artists[0].name + "\nSong: " + spotifyReturn[i].name + "\nPreview Link: " + spotifyReturn[i].external_urls.spotify + "\nAlbum: " + spotifyReturn[i].album.name)
                }

            } else {
                return console.log('Error occurred: ' + error);
            }
        });
    },
    //  ------------------ OMDB ------------------
    //node liri.js movie-this '<movie name here>'
    moviethis: function () {
        if (!query) {
            query = "Mr. Nobody"
        }
        var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + query

        request(queryUrl, function (error, response, data) {

            if (!error && response.statusCode === 200) {
                var omdbReturn = JSON.parse(data)

                console.log("\nTitle: " + omdbReturn.Title + "\nYear: " + omdbReturn.Year + "\nIMDB Rating: " + omdbReturn.Ratings[0].Value + "\nRotten Tomatoes Rating: " + omdbReturn.Ratings[1].Value + "\nCountry: " + omdbReturn.Country + "\nLanguage: " + omdbReturn.Language + "\nActors: " + omdbReturn.Actors + "\nPlot: " + omdbReturn.Plot)
            }
        });
    }
}

methods[input]()