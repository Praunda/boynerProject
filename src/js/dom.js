export default class DOM {
    constructor() {
        this.app = document.getElementById('app')
    }


    mainText(){
        const header = document.createElement("H2");
        this.app.appendChild(header)
        header.innerText = 'BOYNER PROJECT';
    }

    createDiv() {
        return document.createElement("DIV");
    }

    /* const fiveDay = [];
        for (let i = 0; i < istData.list.length; i += 8) {

            const weatherData = {
                "day": istData.list[i].dt_txt,
                "temp": istData.list[i].main.temp,
                "wind": istData.list[i].wind.speed
            }
            fiveDay.push(weatherData)

        }
        console.log('TESTING IS NOT THE END OF THE WORLD', fiveDay);
            this.istDiv.innerHTML = `
            <h2>${istData.city.name}</h2>
        `
 */

    istWeather(istData) {
        const istDiv = this.createDiv();
        this.app.appendChild(istDiv);
        istDiv.innerHTML = `
            <h2 class="city-name">${istData.name}</h2>
            <h4>${istData.main.temp}</h4>
            <h4>${istData.wind.speed}</h4>
        ` 
   
    }

    munWeather(munData) {
        const munDiv = this.createDiv();
        this.app.appendChild(munDiv);
        munDiv.innerHTML = `
            <h2 class="city-name">${munData.name}</h2>
            <h4>${munData.main.temp}</h4>
            <h4>${munData.wind.speed}</h4>
        ` 
    }

    berWeather(berData) {
        const berDiv = this.createDiv();
        this.app.appendChild(berDiv);
        berDiv.innerHTML = `
            <h2>${berData.name}</h2>
            <h4>${berData.main.temp}</h4>
            <h4>${berData.wind.speed}</h4>
        ` 
    }

    parWeather(parData) {
        const parDiv = this.createDiv();
        this.app.appendChild(parDiv);
        parDiv.innerHTML = `
            <h2>${parData.name}</h2>
            <h4>${parData.main.temp}</h4>
            <h4>${parData.wind.speed}</h4>
        ` 
    }

    helWeather(helData) {
        const helDiv = this.createDiv();
        this.app.appendChild(helDiv);
        helDiv.innerHTML = `
            <h2>${helData.name}</h2>
            <h4>${helData.main.temp}</h4>
            <h4>${helData.wind.speed}</h4>
        ` 
    }
}