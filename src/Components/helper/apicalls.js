//get all countries data infected recovered with latest info
import axios from "axios";

const getAllCountries = "https://api.covid19api.com/summary";
//const url = "https://api.covid19api.com/countries";
//const getAllCountries = "https://covid19.mathdro.id/api";

export const fetchCountries = async () => {
  try {
    // const {
    //   data: { Countries },
    // } = await axios.get(url);

    const response = await axios.get(getAllCountries);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get A Country data from day one
let getACountry = "https://api.covid19api.com/dayone/country";

export const fetchCountry = async (country, status) => {
  try {
    const response = await axios.get(
      `${getACountry}/${country}/status/${status}/live`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

//get all global cases
let globalCases = "https://corona.lmao.ninja/all";

export const fetchGlobalCases = async () => {
  try {
    const response = await axios.get(globalCases);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get All States
