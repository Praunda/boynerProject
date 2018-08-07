import DOM from '../src/js/dom';
import EasyHTTP from '../src/services/easyHttp';
import OpenWeather from '../src/services/openWeather'

const httpCall = new EasyHTTP;
const dom = new DOM;
const weather = new OpenWeather;

const istanbul = 'Istanbul';
const munchen = 'München';
const berlin = 'Berlin';
const paris = 'Paris';
const helsinki = 'Helsinki';

dom.mainText();

httpCall.get(`http://api.openweathermap.org/data/2.5/weather?q=${istanbul},tr&appid=${weather.api_key}`)
.then(data => dom.istWeather(data))
.catch(err => console.error(err))

httpCall.get(`http://api.openweathermap.org/data/2.5/forecast?q=${istanbul},tr&appid=${weather.api_key}`)
.then(data => console.log(data))
.catch(err => console.log(err));

//-------------------------------------------------------------------------------------------------------

httpCall.get(`http://api.openweathermap.org/data/2.5/weather?q=${munchen},DE&appid=${weather.api_key}`)
.then(data => dom.munWeather(data))
.catch(err => console.error(err))

httpCall.get(`http://api.openweathermap.org/data/2.5/forecast?q=${munchen},DE&appid=${weather.api_key}`)
.then(data => console.log('Munchen', data))
.catch(err => console.log(err))

//------------------------------------------------------------------------------------------------------

httpCall.get(`http://api.openweathermap.org/data/2.5/weather?q=${berlin},DE&appid=${weather.api_key}`)
.then(data => dom.berWeather(data))
.catch(err => console.error(err))

httpCall.get(`http://api.openweathermap.org/data/2.5/forecast?q=${berlin},DE&appid=${weather.api_key}`)
.then(data => console.log('BERLIN', data))
.catch(err => console.log(err))

//------------------------------------------------------------------------------------------------------

httpCall.get(`http://api.openweathermap.org/data/2.5/weather?q=${paris},FR&appid=${weather.api_key}`)
.then(data => dom.parWeather(data))
.catch(err => console.error(err))

httpCall.get(`http://api.openweathermap.org/data/2.5/forecast?q=${paris},FR&appid=${weather.api_key}`)
.then(data => console.log('Paris', data))
.catch(err => console.log(err))

//------------------------------------------------------------------------------------------------------

httpCall.get(`http://api.openweathermap.org/data/2.5/weather?q=${helsinki},FI&appid=${weather.api_key}`)
.then(data => dom.helWeather(data))
.catch(err => console.error(err))

httpCall.get(`http://api.openweathermap.org/data/2.5/forecast?q=${helsinki},FI&appid=${weather.api_key}`)
.then(data => console.log(data))
.catch(err => console.log(err))
