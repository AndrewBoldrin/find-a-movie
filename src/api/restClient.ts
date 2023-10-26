import { API } from './config'
import axios from 'axios'

export const restClient = axios.create({
  baseURL: API.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API.token}`,
  },
})
