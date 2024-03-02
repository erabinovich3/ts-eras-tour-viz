import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export const fetchGeoData = async () => {
  const url = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

  return d3.json(url).then((data) => {
    return {
      land: topojson.feature(data, data.objects.land),
      countries: topojson.mesh(data, data.objects.countries, (a, b) => a !== b),
    };
  });
};
