import axios from 'axios'

export  const Axios = axios.create({
  baseURL: 'https://mysterious-dawn-87140.herokuapp.com',
  headers: {
    'content-type': 'application/json',
  },
})