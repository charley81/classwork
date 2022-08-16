// Objective: We are going to create an object Radio!

// How to begin:

// Create a variable called radio and assign as its value an object literal
// Give it a property called stations and make the value an array of station objects (at least 2)
// Give each station object a property called name and songs. Name should be a string and songs should be an array of song objects (at least 3).
// Song objects should have two properties: title and artist
// Create a method on your radio object that changes the station randomly (research Math.random and Math.floor)
// When the station is changed, pick a song from that station. Example: console.log("Now Playing:" + song.title + "by" + song.artist)

// Happy coding!

const radio = {
  stations: [
    {
      name: '97.9FM The Beat',
      songs: [
        {
          artist: 'Future',
          title: 'Tony Montana',
        },
        {
          artist: '2 Chainz',
          title: 'Spend It',
        },
        {
          artist: 'T.I.',
          title: 'What you know about that',
        },
      ],
    },
    {
      name: '107.5 Country Hits',
      songs: [
        {
          artist: 'Chris Statpleton',
          title: 'Tennesse Wiskey',
        },
        {
          artist: 'Garth Brooks',
          title: 'Friends in low places',
        },
        {
          artist: 'Zac Brown Band',
          title: 'Country Fried',
        },
      ],
    },
  ],
  changeStation() {
    let randomNumberStation = randomNumber(2, 0)
    let randomNumberSong = randomNumber(3, 0)
    const station = radio.stations[randomNumberStation]
    const song = station.songs[randomNumberSong]
    console.log(
      `Now playing ${song.title} by ${song.artist} from ${station.name}`
    )
  },
}

const randomNumber = (max, min) => Math.floor(Math.random() * max) + min

radio.changeStation()
