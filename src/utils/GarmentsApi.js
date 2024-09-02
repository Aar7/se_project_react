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

  async _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  async getGarmentData() {
    console.log(`[GarmentsApi] garmentsApi.getGarmentData called!`);
    return this._request(`${this.baseUrl}items`, {});
  }

  async saveGarmentData(cardData) {
    console.log(`[GarmentsApi] garmentsApi.saveGarmentData called!`);

    return this._request(`${this.baseUrl}items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardData),
    });
  }

  async deleteGarmentData(garmentId) {
    console.log(`[GarmentsApi] garmentsApi.deleteGarmentData called!`);

    return this._request(`${this.baseUrl}items/${garmentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
}
