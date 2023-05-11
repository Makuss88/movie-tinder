const Movie1 = {
  id: 1,
  title: "Movie1",
  rating: 8.4,
};

const Movie2 = {
  id: 2,
  title: "Movie2",
  rating: 4.8,
};

describe("#test about movieObjects", () => {
  test("#01 => Movie1 has title Movie1", () => {
    expect(Movie1.title).toBe("Movie1");
  });

  test("#02 => Movie1 has title Movie1111", () => {
    expect(Movie1.title).not.toBe("Movie1111");
  });

  test("#03 => Movie1 is defrent to Movie1", () => {
    expect(Movie1 === Movie2).not.toBe(true);
  });

  test("#04 => Movie1 has higher rating than Movie2", () => {
    expect(Movie1.rating > Movie2.rating).toBe(true);
  });
});

export {};
