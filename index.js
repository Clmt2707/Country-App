// Fonction pour récupérer le pays
const countriesContainer = document.querySelector('.countries-container');
let countriesData  = [];

async function getCountry () {
    await fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            countriesData = data;
            
        }) 
        console.log(countriesData);
        countriesDisplay();
}

function countriesDisplay () {
    countriesContainer.innerHTML = countriesData.map((country) =>
            `
            <div class="card">
                <h2>${country.translations.fra.common}</h2>
                <img src="${country.flags.svg}" alt="Drapeau ${country.name.common}></img>
            </div>
            `
    );
}

window.addEventListener('load', getCountry)