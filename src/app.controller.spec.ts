import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { MovieApi } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MovieApi],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("get movie", () => {
    it("should return a correct movie", async () => {
      expect(
        await appController.getMovie({ title: "harry potter" })
      ).toHaveProperty("Title");
    });
  });

  describe("get movie", () => {
    it("should return a wrong movie", async () => {
      expect(
        await appController.getMovie({ title: "harry pottersdasadw" })
      ).toHaveProperty("Error");
    });
  });
});
