import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IMovie } from './interfaces/list-movie';
import movie_api from './movie_api/movie_api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movies')
  async getMovie(@Body() { title }: IMovie): Promise<any> {
    const movie = await movie_api({ title });
    return movie;
  }
}
