import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MovieApi } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MovieApi],
})
export class AppModule {}
