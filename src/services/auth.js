import { api } from 'constants/api'
import { Fetcher } from 'helpers/Fetcher'

const { apiUrl } = api

export const logIn = (user) => {
  return Fetcher.post(`${apiUrl}auth/login`, user)
}

export const register = (user) => {
  return Fetcher.post(`${apiUrl}auth/register`, user)
}
