import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ coverImg, title, genres, id, year, rating }) => {
  return (
    <div className='movieContainer'>
      <Link to={`/movie/${id}`}>
        <img className='movie_img' src={coverImg} alt='title' />
      </Link>
      <h2 className='movie_h2'>{title}</h2>
      <p className='movie_rating'>{rating}</p>
      <p className='movie_year'>{year}</p>
      {/* <p>{summary}</p> */}
      <ul className='movie_Ul'>
        {genres.map((g) => (
          <li key={g}>{g}</li>
          // movie 안에 genres 라는 배열에는 고유의 아이디가 없어서 임의의 g 를 사용
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
