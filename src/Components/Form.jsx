import { useState } from "react"
import FormStyles from '../Styles/Form.module.css'
import Card from "./Card"

const Form = () => {
    const [song, setSong] = useState({
        songName: '',
        artistName: '',
        genre: '',
        duration: ''
    })

    const [err, setErr] = useState(false)

    const [successOp, setSuccessOp] = useState(false)

    

    const handleSongName = (e) => {
        setSong({...song, songName: e.target.value})
    }

    const handleArtistName = (e) => {
        setSong({...song, artistName: e.target.value})
    }

    const handleGenre = (e) => {
        setSong({...song, genre: e.target.value})
    }

    const handleDuration = (e) => {
        setSong({...song, duration: e.target.value})
    }


    const handleSubmit = (e) => {
        const regex = /^\s+/;

        e.preventDefault();

        if(
            song.songName.length >= 3 &&
            !regex.test(song.songName) &&
            song.artistName.length >= 6 &&
            song.genre.length >= 3 &&
            song !== null
        ){
            setSuccessOp(true)
            setErr(false)
        } else {
            setErr(true)
            setSuccessOp(false)
        }
    }



  return (
    <div>
        <h1>Upload your music!</h1>

        <form onSubmit={handleSubmit} className={FormStyles.form}>
            <label>Song or album name</label>
            <input type='text' onChange={handleSongName}></input>

            <label>Artist/s</label>
            <input type='text' onChange={handleArtistName}></input>

            <label>Genre/s</label>
            <input type='text' onChange={handleGenre}></input>

            <label>Duration:</label>
            <input type='number' onChange={handleDuration}></input>

            <button>Upload</button>
        </form>

        {successOp ? ( 
            <>
                <h3>Thanks {song.artistName}!</h3>
                <h3>Your song/album has been uploaded</h3>
            </> 
        ) : null}

        {successOp? (
            <Card item={song}/>
        ) : null}

        
        {err && (
        <p style={{ color: "red" }}>Something went wrong...</p>
        )}

        
    
    </div>
  )
}

export default Form