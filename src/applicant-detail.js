const name = document.getElementById('name');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const key = document.getElementById('key');
const pizza = document.getElementById('pizza');
const curl = document.getElementById('curl');

const json = window.localStorage.getItem('appSubmission');
const hydratedApplicant = JSON.parse(json);

name.textContent = hydratedApplicant.name;
street.textContent = hydratedApplicant.street;
city.textContent = hydratedApplicant.city;
state.textContent = hydratedApplicant.state;
key.textContent = hydratedApplicant.key;
pizza.textContent = hydratedApplicant.pizza.join(', ');
curl.textContent = hydratedApplicant.curl;