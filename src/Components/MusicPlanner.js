// Import all components
import SONG_API_URL from './SongsAPI'
import {useEffect, useState} from 'react'

// Function to run main application
function MusicList() {

  // Declare endpoint to be fetched, variable and useState hook
  const [songs, setSongs] = useState([{}])

  const [newSongTitle, setNewSongTitle] = useState('')
  const [newSongArtist, setNewSongArtist] = useState('')
  const [newSongGenre, setNewSongGenre] = useState('')

  const [updatedTitle, setUpdatedMake] = useState('')
  const [updatedArtist, setUpdatedModel] = useState('')
  const [updatedGenre, setUpdatedPrice] = useState('')
  // Fetch the API URL and then data will shown as JSON
  function getSongs() {
    fetch(SONG_API_URL)
      .then(data => data.json())
      .then(data => setSongs(data))
  }
  // Synchonize with external system
  useEffect((songs) => {
    getSongs()
    console.log(songs)
  }, [])
  // Delete songs using function with delete method
  function deleteSong(id) {
    fetch(`${SONG_API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getSongs())
  }
  // Post songs using function with post method
  function postNewSong(e) {
    e.preventDefault()

    fetch(SONG_API_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newSongTitle,
        artist: newSongArtist,
        genre: newSongGenre,
      })
    }).then(() => getSongs())
  }
  // Update songs using function with PUT method
  function updateSong(e, songObject) {
    e.preventDefault()
    // Declare variable to spread and write to API objects
    let updatedGuitarObject = {
      ...songObject,
      title: updatedTitle,
      artist: updatedArtist,
      genre: updatedGenre,
    }
    // Fetch song API and create PUT method
    fetch(`${SONG_API_URL}/${songObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedGuitarObject),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => getSongs())

  }
  
  // Render JSX for app
  return (
    <div classMake="App" className='container'>
      {/* Add new song form */}
      <form>
        <h1>Wedding Music Planner</h1>
        <p>Add your song requests in the form below, or check out some of our suggestions:</p><br/>
        <h4>Popular Dance Songs</h4>
        <ul>
          <li>Old Time Rock and Roll — Bob Seger</li>
          <li>Crank That – Soulja Boy</li>
          <li>Watch Me (Whip/Nae Nae)- Silento</li>
          <li>WOP – J Dash</li>
          <li>Timber- Pitbull</li>
          <li>Got To Give It U — Marvin Gaye</li>
          <li>Cheap Thrills – Sia ft. Pitbull</li>
          <li>Wishing and Hoping</li>
          <li>Dusty Springfield </li>
          <li>La Vida Es Un Carnaval — Celia Cruz</li>
          <li>Before I Let Go — Maze ft. Frankie Beverly</li>
          <li>I’m Coming Out — Diana Ross</li>
          <li>Fly Me to the Moon — Frank Sinatra</li>
          <li>Shout — The Isley Brothers</li>
          <li>Brown Eyed Girl — Van Morrison</li>
          <li>Celebration — Kool & the Gang</li>
          <li>September - Earth Wind & Fire</li>
          <li>Poison - Bell Biv DeVoe</li>
          <li>P.Y.T - Michael Jackson</li>
          <li>1999 – Prince</li>
          <li>Walk This Way - Run Dmc ft. Aerosmith</li>
          <li>Brown Eyed Girl - Van Morrison</li>
          <li>You Dropped a Bomb on Me - Gap Band</li>
          <li>ABC - Jackson 5</li>
          <li>Thriller - Michael Jackson</li>
          <li>Give It To Me Baby - Rick James</li>
          <li>You Shook Me All Night Long - AC/DC</li>
          <li>Suavemente - Elvis Crespo</li>
          <li>Ring My Bell - Anita Ward</li>
          <li>This is How We Do It - Montell Jordan</li>
          <li>weet Child O' Mine - Guns 'N' Roses</li>
          <li>One More Tim - Daft Punk</li>
          <li>Please Don't Stop the Music" – Rihanna</li>
        </ul><br /><br />
        <h4>Make a Song Request</h4>
        <label>Song Title</label>
        <input onChange={(e) => setNewSongTitle(e.target.value)}></input>
        <label>Artist</label>
        <input onChange={(e) => setNewSongArtist(e.target.value)}></input>
        <label>Genre</label>
        <input onChange={(e) => setNewSongGenre(e.target.value)}></input><br />
        <button onClick={(e) => postNewSong(e)}>Submit</button>
      </form>
      <hr class="solid"></hr>
      {/* Return current list of songs from API */}
      <h4>Selected Songs</h4>
      {/* Map API for song object properties */}
      {songs.map((song, index) => (
        <div key={index}>
          <div>
            Song Title: {song.title} <br></br>
            Artist: {song.artist} <br></br>
            Genre: {song.genre} <br></br>
            {/* Delete song button */}
            <button onClick={() => deleteSong(song.id)}>Delete</button>
          </div>
          {/* Update songs form */}
          <form><br />
            <h4>Update Song</h4>
            <label>Update Song Title</label>
            <input onChange={(e) => setUpdatedMake(e.target.value)}></input>

            <label>Update Artist</label>
            <input onChange={(e) => setUpdatedModel(e.target.value)}></input>

            <label>Update Genre</label>
            <input onChange={(e) => setUpdatedPrice(e.target.value)}></input><br></br>
            <button onClick={(e) => updateSong(e, song)}>Update</button>
          </form>
          <hr class="solid-2"></hr>
        </div>
      ))}
    </div>
  )
}

// Export main app
export default MusicList;
