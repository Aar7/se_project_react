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

  async fetchData() {
    return fetch(
      `${this._constants.baseURL}lat=${this._constants.coordLat}&lon=${this._constants.coordLon}&units=imperial&appid=${this._constants.authKey}`
    ).then(this._checkResponse);
  }

  logData() {
    console.log(
      `${this._constants.baseURL}lat=${this._constants.coordLat}&lon=${this._constants.coordLon}&units=imperial&appid=${this._constants.authKey}`
    );
  }

  async saveGarmentData() {
    // function to save garment new garments to a database
    // return fetch(``).then(this._checkResponse);
    console.log(`[WeatherAPI] weather.saveGarmentData called!`);
  }

  async deleteGarment() {
    // function to remove the desired garment from the database
    // return fetch(``).then(this._checkResponse)
    console.log(`[WeatherAPI] weather.deleteGarment called!`);
  }
}

export default WeatherApi;
