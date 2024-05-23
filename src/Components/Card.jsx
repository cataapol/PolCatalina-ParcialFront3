import Form from "./Form"
import CardStyles from '../Styles/Card.module.css'

const Card = ({item}) => {

    const { songName, artistName, genre, duration} = item


  return (
    <div className={CardStyles.container}>
        <h1>Your song</h1>
        <h2>Name: {songName}</h2>
        <h2>Artist: {artistName}</h2>
        <h2>Genre: {genre}</h2>
        <h2>Duration: {duration} min.</h2> 
    </div>
  )
}

export default Card