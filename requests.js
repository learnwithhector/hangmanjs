const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCountryDetails = async (countryCode) => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (res.status === 200) {
    const data = await res.json();
    const countryWanted = data.find((country) => country.cca2 === countryCode);
    return countryWanted.name.common;
  } else {
    throw new Error("Unable to get country info");
  }
};

const getLocation = async () => {
  const res = await fetch("https://ipinfo.io/json?token=a53ad9420e282c");

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error("Unable to find location");
  }
};

const getCurrentCountry = async () => {
  const code = await getLocation();
  return getCountryDetails(code.country);
};
