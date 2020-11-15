import { errorHandler } from 'decorators'

const parseJSON = response => response.json()

export class Fetcher {
  @errorHandler
  static get(path, customOptions) {
    return fetch(path, {
      method: 'GET',
      ...customOptions
    })
      .then(parseJSON)
  }

  @errorHandler
  static post(path, data, customOptions) {
    return fetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      ...customOptions
    })
      .then(parseJSON)
  }
}
