import axios from 'axios';
import { IMovie } from 'src/interfaces/list-movie';

const movie_api = async ({ title }: IMovie) => {
  let result = {};

  await axios
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=8510023c&t=${title}`)
    .then((res) => {
      result = res.data;
    })
    .catch((err) => console.log(err));
  return result;
};
export default movie_api;
