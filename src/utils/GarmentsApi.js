export default class GarmentsApi {
  constructor() {
    this.baseUrl = "http://localhost:3001/";
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

  async getGarmentData() {
    return fetch(`${this.baseUrl}items`).then(this._checkResponse);
  }

  async saveGarmentData(cardData) {
    // function to save garment new garments to a database
    console.log(`[GarmentsApi] weather.saveGarmentData called!`);
    return fetch(`${this.baseUrl}items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    }).then(this._checkResponse);
  }

  async deleteGarmentData(garmentId) {
    // function to remove the desired garment from the database
    console.log(`[GarmentsApi] weather.deleteGarment called!`);
    return fetch(`${this.baseUrl}items/${garmentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}
