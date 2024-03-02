import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export const fetchTourData = async () => {
  const url = `https://gist.githubusercontent.com/erabinovich3/65938ccaa3ebde8aa8089dd3b6516741/raw/eras-tour-surprise-songs.csv?${Math.floor(
    Math.random() * 1000
  )}`;

  const row = (d) => {
    d.ss1 = d["Surprise Song 1"].split("//").map((str) => str.trim());
    d.ss2 = d["Surprise Song 2"].split("//").map((str) => str.trim());

    return d;
  };

  return d3.csv(url, row).then((data) => {
    return data;
  });
};

export async function getCityCount(data) {
  const tourData = await fetchTourData();
  let cityIndex = 0;
  const cityCount = tourData.reduce((accumulator, tourStop) => {
    if (!accumulator.find((elem) => elem.loc === tourStop.Location)) {
      accumulator[cityIndex++] = {
        count: 0,
        loc: tourStop.Location,
        long: +tourStop.Longitude,
        lat: +tourStop.Latitude,
      };
    }

    accumulator.find((elem) => elem.loc === tourStop.Location).count++;
    return accumulator;
  }, []);

  return cityCount;
}
