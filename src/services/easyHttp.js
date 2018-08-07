import 'regenerator-runtime/runtime';

export default class EasyHTTP {

    async get(url) {
  
      const resp = await fetch(url)
      const respData = await resp.json()

      return respData;
  }
 }