import axios from 'axios'

const BASE_URL = '/'
const ERR_OK = 0

axios.defaults.baseURL = BASE_URL

export function get(url, params) {
  return axios
    .get(url, { params })
    .then((res) => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
