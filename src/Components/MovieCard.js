
import NavBar from './NavBar'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {

return(
 <div className="affich">
 <h3>  
{movie.movieName} </h3>
 <form>
 <img src={movie.movieImage}/>
 <br/>
 <br/>
 
     <StarRatingComponent 
           name="rate2" 
           editing={false}
           starCount={5}
              value={movie.movieRating}
         />
  </form>
  </div>
)
}

export default MovieCard


