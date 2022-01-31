import { MOVIES_API_BASE_URL } from "./constants";

class MoviesApi {
  constructor (baseUrl) {
    this._baseUrl = baseUrl;
  }

  getMovies () {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return this._getResponseData(res);
      })
  }


  _getResponseData (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
  }
}

export const moviesApi = new MoviesApi(MOVIES_API_BASE_URL);
