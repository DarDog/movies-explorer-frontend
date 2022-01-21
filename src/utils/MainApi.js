import { MAIN_API_BASE_URL } from "./constants";

class MainApi {
  constructor (baseUrl) {
    this._baseUrl = baseUrl;
  }

  signUp ({ email, name, password }) {
    return fetch(`${ this._baseUrl }/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  signIn ({ email, password }) {
    return fetch(`${ this._baseUrl }/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      })
    })
  }

  getCurrentUser () {
    return fetch(`${ this._baseUrl }/users/me`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  updateCurrentUser ({email, name}) {
    return fetch(`${ this._baseUrl }/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        name
      })
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  getSavedMovies () {
    return fetch(`${ this._baseUrl }/movies`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  setSavedMovie (movie) {
    return fetch(`${ this._baseUrl }/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({movie})
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  removeSavedMovie (movieId) {
    return fetch(`${ this._baseUrl }/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  signOut () {
    return fetch(`${ this._baseUrl }/signOut`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
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

export const mainApi = new MainApi(MAIN_API_BASE_URL);
