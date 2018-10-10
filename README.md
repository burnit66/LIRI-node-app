
# LIRI: Language-Interpretation-Recognition-Interface
 
LIRI is a command line node app that takes in parameters and gives you back data.

You will find these resources helpful in order to build off of the existing CLI program
 - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 - [Request](https://www.npmjs.com/package/request)
 - [OMDB API](http://www.omdbapi.com/) 
 - [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
 - [Moment](https://www.npmjs.com/package/moment)

Using  Spotify will require a CLIENT ID and CLIENT SECRET. You'll need to register [here](https://developer.spotify.com/my-applications/#!/) as a developer in order to get them. 

## Breakdown
LIRI Can:
 - Search BandsInTown for tour schedules.
 - Search Spotify for an artist, band, or song.
 - Search IMDB for an actor, actress, or movie.
 - Execute raw text from the [random.txt](https://github.com/burnit66/liri-node-app/blob/master/random.txt) file

## Using LIRI
Bands in Town:

    node liri.js concert-this <artist/band name here>

Spotify:

    node liri.js spotify-this-song  <song name here>

OMDB

    node liri.js movie-this <movie name here>

Do what it says:

    node liri.js do-what-it-says

## Returns
Bands in Town:
![bands in town](https://user-images.githubusercontent.com/28606480/46710985-56a90900-cc18-11e8-83b8-fe272828bf99.png)


Spotify:
![spotify](https://user-images.githubusercontent.com/28606480/46710945-36794a00-cc18-11e8-96e0-d1d3a3378397.png)


OMDB:
![omdb](https://user-images.githubusercontent.com/28606480/46711000-66285200-cc18-11e8-9b86-4069e749b70c.png)


Do what it says:
![do what it says image](https://user-images.githubusercontent.com/28606480/46710893-fca84380-cc17-11e8-8278-9821fb690ddd.png)

