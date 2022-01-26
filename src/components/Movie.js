import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div>
      <img src={coverImg} alt='title' />
      <h2>
        {' '}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
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
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
