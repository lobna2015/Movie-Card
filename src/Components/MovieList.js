import React, {useState}  from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className="container">

{movies.map(movie => <MovieCard movie={movie}/>)}


    </div>
  )
}

export default MovieList