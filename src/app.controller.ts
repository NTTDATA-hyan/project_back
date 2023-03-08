import { Body, Controller, Get } from "@nestjs/common";
import { MovieApi } from "./app.service";
import { IMovie } from "./interfaces/list-movie";

@Controller()
export class AppController {
  constructor(private readonly appService: MovieApi) {}

  @Get("movies")
  async getMovie(@Body() { title }: IMovie): Promise<object> {
    const movie = await this.appService.getMovie({ title });
    return movie;
  }
}
