import axios from "axios";

const url = "https://swapi.dev/api/films";

export const fetchData = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(url);

    return results;
  } catch (err) {
    console.log(err);
  }
};
