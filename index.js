/* 
https://restcountries.com/v3.1/all
 */

const renderCountries = (country) => {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const img = document.createElement("img");
  img.src = country.flags.svg;

  const googleMaps = document.createElement("a");
  googleMaps.textContent = `${countryName} google Maps`;
  googleMaps.href = country.maps.googleMaps;
  googleMaps.target = "_blank";

  card.append(name, img, googleMaps);
  document.querySelector("#countries").append(card);
};

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  console.log(data);
  console.log(data[100]);
  console.log(data[100].name.common);

  data.forEach(renderCountries);
}

getCountries();
