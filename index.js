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
                    <img src=${country.flags.svg} alt="Drapeau ${country.name.common}" >  
                    <h2>${country.translations.fra.common}</h2>
                    <h4>${country.capital}</h4>
                </div>
            `
        ).join('');
}


window.addEventListener("load", getCountry);