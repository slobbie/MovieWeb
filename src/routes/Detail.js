import { useEffect } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams(); // route 로 받은 url id를 변수에 바로 담아주는 hooks

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json); // useParms 로 받아온 id 값을 이용하여 함수에 담아준다.
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
};
export default Detail;
