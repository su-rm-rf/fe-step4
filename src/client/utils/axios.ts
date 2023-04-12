import axios from 'axios'

const base1 = 'http://localhost:8602'
const base2 = 'http://localhost:8081'

export default {
  get: (url, ...options) => axios.get(base1 + url, ...options),
  get2: (url, ...options) => axios.get(base2 + url, ...options),
  post: (url, ...options) => axios.post(base1 + url, ...options),
  post2: (url, ...options) => axios.post(base2 + url, ...options),
}