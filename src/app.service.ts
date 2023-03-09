import { Injectable } from "@nestjs/common";
import axios from "axios";
import { IMovie } from "./interfaces/list-movie";

@Injectable()
export class MovieApi {
  async getMovie({ title }: IMovie): Promise<object> {
    let result = {};
    await axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=8510023c&t=${title}`)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => console.log(err));
    return result;
  }
}
