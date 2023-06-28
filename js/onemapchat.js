const form = document.getElementById('searchForm');
const resultsDiv = document.getElementById('addre');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const postalCodeInput = document.getElementById('postalCode');
    const postalCode = postalCodeInput.value;

    fetch(`https://developers.onemap.sg/commonapi/search?searchVal=${postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const address = data.results[0].ADDRESS;
          resultsDiv.innerHTML = `ADDRESS: <br> ${address}`;
        } else {
          resultsDiv.innerHTML = 'No results found.';
        }
      })
      .catch(error => {
        resultsDiv.innerHTML = `Error: ${error.message}`;
      });
  });


