var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               },
    printPlaylists: function () {
                var allPlaylists = [];
                      for(var keys in this.playlists){
                             var pId = this.playlists[keys].id; 
                             var pName = this.playlists[keys].name;
                             var pTracks = this.playlists[keys].tracks.length;
                             console.log(pId + ": " + pName + " - " + pTracks + " tracks");
                    }
               },
    printTracks: function () {
         var allTracks = [];
         for (var keys in this.tracks){
                var id = this.tracks[keys].id;
                var name = this.tracks[keys].name;
                var artist = this.tracks[keys].artist;
                var album = this.tracks[keys].album;
                console.log(id + ": " + name + " by " + artist + " (" + album + ")")
                }
            },
    printPlaylist: function (playlistId) {
        var pListName = this.playlists[playlistId].name;
        var pListTracks = this.playlists[playlistId].tracks;
        console.log(playlistId + ": " + pListName + " - " + pListTracks.length + " tracks");
        for (var i = 0; i < this.playlists[playlistId].tracks.length; i++){
                for (var keys in this.tracks){
                        if(this.playlists[playlistId].tracks[i] === this.tracks[keys].id){
                                var tName = this.tracks[keys].name;
                                var tArtist = this.tracks[keys].artist;
                                var tAlbum = this.tracks[keys].album;
                                console.log(pListTracks[i] + ": " + tName + " by " + tArtist + " (" + tAlbum + ")");
                        }
                }
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
        this.playlists[playlistId].tracks.push(trackId);
        console.log(this.playlists[playlistId].tracks);
    },
    uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function (name, artist, album) {
        var uniqueId = this.uid();
        this.tracks[uniqueId] = {
                id: uniqueId,
                name: name,
                artist: artist,
                album: album
         }
        console.log(this.tracks);
    },
    addPlaylist: function (name) {
        var uniqueId = this.uid();
        this.playlists[uniqueId] = {
               id: uniqueId,
               name: name,
               tracks: []
        }
        console.log(this.playlists);
    },
}
  

  
// console.log("FUNCTION 1");
// library.printPlaylists();
// console.log("-----------");

// console.log("FUNCTION 2");
// library.printTracks();
//   console.log("-----------");

// console.log("FUNCTION 3");
// library.printPlaylist("p01");
//   console.log("-----------");

// console.log("FUNCTION 4");
// library.addTrackToPlaylist("t03", "p01");
//   console.log("-----------");

// console.log("FUNCTION 5");

// console.log("FUNCTION 6");
// library.addTrack("x", "y", "z");
//   console.log("-----------");


// console.log("FUNCTION 7");
// library.addPlaylist("workout");
//   console.log("-----------");


// console.log("FUNCTION 8");
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//        for (var tracks in library.tracks){

//        }
// }