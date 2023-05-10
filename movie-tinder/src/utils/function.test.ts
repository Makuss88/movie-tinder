import axios from "axios";
import { IMockMovieData } from "./../mockData/index";
import { putData } from "./function";

jest.mock("axios");

describe("putData", () => {
  const movieData: IMockMovieData[] = [
    {
      id: "1",
      title: "Movie 1",
      imageURL: "",
      summary: "Summary1",
      rating: 1.23,
    },
  ];
  const counter = 0;
  const recommendationsPath = "path";

  it("should make a PUT request with the correct data", async () => {
    await putData(movieData, counter, recommendationsPath);

    expect(axios.put).toHaveBeenCalledWith(
      "URL_WEBSITE/recommendations/1/path",
      { movieData }
    );
  });

  it("should log the response on success", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    (axios.put as jest.MockedFunction<typeof axios.put>).mockResolvedValueOnce({
      data: "Success",
    });
    await putData(movieData, counter, recommendationsPath);

    expect(consoleSpy).toHaveBeenCalledWith("Success");
  });

  it("should log the error on failure", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    (axios.put as jest.MockedFunction<typeof axios.put>).mockRejectedValueOnce(
      "Error"
    );
    await putData(movieData, counter, recommendationsPath);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error");
  });
});
