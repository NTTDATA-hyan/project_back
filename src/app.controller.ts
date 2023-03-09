import { Body, Controller, Post } from "@nestjs/common";
import { MovieApi } from "./app.service";
import { IMovie } from "./interfaces/list-movie";

@Controller()
export class AppController {
  constructor(private readonly appService: MovieApi) {}

  @Post("movies")
  async getMovie(@Body() { title }: IMovie): Promise<object> {
    const movie = await this.appService.getMovie({ title });
    return movie;
  }
}
