import axios from 'axios'

const baseURL = 'https://randomuser.me'
export const api = axios.create({ baseURL })
