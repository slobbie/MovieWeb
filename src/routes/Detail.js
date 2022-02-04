import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const [loading, Setloading] = useState(true);
  const { id } = useParams(); // route 로 받은 url id를 변수에 바로 담아주는 hooks

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    Setloading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  // console.log(detail);
  return (
    <div className='App'>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className='mainHome'>
          {detail.map((movie) => {
            return <div> 랜더링</div>;
          })}
        </div>
      )}
    </div>
  );
  // 로딩 구현, state 에 api 담기
};
export default Detail;
