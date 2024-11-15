const keyAPI = "61bf54bf58488c026f7427f1";
const baseURL = `https://v6.exchangerate-api.com/v6/${keyAPI}/pair`;

function getCurrency() {
  const currencyValues = [];
  const apiEndpoints = [
    `${baseURL}/USD/RUB`,
    `${baseURL}/EUR/RUB`,
    `${baseURL}/CNY/RUB`,
    `${baseURL}/GBP/RUB`,
    `${baseURL}/JPY/RUB`,
    `${baseURL}/KZT/RUB`,
  ];
  const requests = apiEndpoints.map((endpoint) => axios.get(endpoint));
  axios
    .all(requests)
    .then(
      axios.spread((...responses) => {
        responses.forEach((response, index) => {
          currencyValues.push({
            id: index + 1,
            name: response.data.base_code,
            value: response.data.conversion_rate.toFixed(2),
          });
        });
        showCurrency(currencyValues);
      })
    )
    .catch((errors) => {
      console.error("Error fetching data:", errors);
    });
}

function showCurrency(currencies) {
  const listCur = document.querySelector("#currency_list");
  let items = "";
  currencies.forEach((i) => {
    items += `<li><span>${i.name}: </span> ${i.value}</li>`;
  });
  listCur.innerHTML = items;
}
getCurrency();
setInterval(getCurrency, 15 * 60 * 1000);
