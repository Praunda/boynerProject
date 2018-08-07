export default class DOM {
    constructor() {
        this.app = document.getElementById('app')
    }

    mainText(){
        const header = document.createElement("H2");
        this.app.appendChild(header)
        header.innerText = 'BOYNER PROJECT';
    }

    /* listUserName(userName) {
      userName.forEach((item)=>{
          const list = document.createElement("LI");
          const node = document.createTextNode(`${item}`);
          list.appendChild(node)
          this.mainList.appendChild(list)
      })
    } */

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
        console.log('Istanbul', istData)
        const istDiv = document.createElement("DIV");
        this.app.appendChild(istDiv);
        istDiv.innerHTML = `
            <h2>${istData.name}</h2>
            <h4>${istData.main.temp}</h4>
            <h4>${istData.wind.speed}</h4>
        ` 
   
    }

    munWeather(munData) {
        console.log('Munich', munData)
        const munDiv = document.createElement("DIV");
        this.app.appendChild(munDiv);
        munDiv.innerHTML = `
            <h2>${munData.name}</h2>
            <h4>${munData.main.temp}</h4>
            <h4>${munData.wind.speed}</h4>
        ` 
    }

    berWeather(berData) {
        console.log('Berlin', berData)
        const berDiv = document.createElement("DIV");
        this.app.appendChild(berDiv);
        berDiv.innerHTML = `
            <h2>${berData.name}</h2>
            <h4>${berData.main.temp}</h4>
            <h4>${berData.wind.speed}</h4>
        ` 
    }

    parWeather(parData) {
        console.log('Paris', parData)
        const parDiv = document.createElement("DIV");
        this.app.appendChild(parDiv);
        parDiv.innerHTML = `
            <h2>${parData.name}</h2>
            <h4>${parData.main.temp}</h4>
            <h4>${parData.wind.speed}</h4>
        ` 
    }

    helWeather(helData) {
        console.log('Helsinki', helData)
        const helDiv = document.createElement("DIV");
        this.app.appendChild(helDiv);
        helDiv.innerHTML = `
            <h2>${helData.name}</h2>
            <h4>${helData.main.temp}</h4>
            <h4>${helData.wind.speed}</h4>
        ` 
    }
}