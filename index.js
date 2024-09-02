// Fonction pour récupérer le pays
const countryName = document.getElementsByClassName('countries-container');


function getCountry () {
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            countryName.textContent = data[0].name.common;

            
        })
}

getCountry();