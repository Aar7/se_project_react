class WeatherApi {
  constructor(constants) {
    this._constants = constants;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Promise rejected. Response invalid. Error: ${res.status}`
      );
    }
  }

  async _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  async fetchData() {
    return this._request(
      `${this._constants.baseURL}lat=${this._constants.coordLat}&lon=${this._constants.coordLon}&units=imperial&appid=${this._constants.authKey}`,
      {}
    );
  }
}

export default WeatherApi;
