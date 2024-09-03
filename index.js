// Fonction pour récupérer le pays
const countriesContainer = document.querySelector('.countries-container');
let countriesData  = [];
const btnSort = document.querySelectorAll(".btnSort");
let sortMethod = "maxToMin";



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
    countriesContainer.innerHTML = countriesData
        .filter((country) => country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))

        .sort((a, b) => {
            if (sortMethod === "maxToMin") {
                return b.population - a.population;
            } else if (sortMethod === "minToMax") {
                return a.population - b.population;
            } else if (sortMethod === "alpha") {
                return a.translations.fra.common.localeCompare(b.translations.fra.common);
            }
            
        })

        .slice(0, inputRange.value)

        .map((country) =>
        `
               <div class="card">
                    <img src=${country.flags.svg} alt="Drapeau ${country.name.common}" >  
                    <h2>${country.translations.fra.common}</h2>
                    <h4>${country.capital}</h4>
                    <p>${country.population.toLocaleString()}</p>
                </div>
            `
        ).join('');
}


window.addEventListener("load", getCountry);
inputSearch.addEventListener('input', countriesDisplay);
inputRange.addEventListener('input', () => {
    countriesDisplay();
    rangeValue.textContent = inputRange.value;
})

btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sortMethod = e.target.id;
        countriesDisplay();
    });
});