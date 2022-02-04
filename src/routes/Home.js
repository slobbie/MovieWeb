import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Home = () => {
  const [loading, Setloading] = useState(true);
  const [movies, setMovies] = useState([]); // api 에서 movies 정보를 가져오는 상태값

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies); // json data 중 movies 정보를 가져옴
    Setloading(false); // setMovies 에 담는 이유는 렌더링 되었을때 movies [] 빈배열이 호출 되고 그후에 setMovies 에 정보가 담긴다.
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className='mainHome'>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
