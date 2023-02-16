import axios from 'axios'
import { Cookies } from 'react-cookie';
const cookie = new Cookies()

const api = (url = '', method = 'POST', data = {}) => {

  const options = {
    method,
    headers: {
      'content-type': 'application/json',
    },
    timeout: 60 * 60 * 1000,
    data,
    url: `${process.env.REACT_APP_SERVER_URL}/${url}`,
  }
  return axios(options)
}

export const apiWithToken = (url = '', method = 'POST', data = {}) => {

  const options = {
    method,
    headers: {
      'content-type': 'application/json',
      'x-access-token' : getToken()
    },
    timeout: 60 * 60 * 1000,
    data,
    url: `${process.env.REACT_APP_SERVER_URL}/${url}`,
  }
  return axios(options)
}


export const apiFormdata = (url = '', method = 'POST', data = {}) => {
  const options = {
    method,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-access-token' : getToken()
    },
    timeout: 60 * 60 * 1000,
    data,
    url: `${process.env.REACT_APP_SERVER_URL}/${url}`,
    
  }
  return axios(options)
}


// export const remove = (url = 'delete', method = 'DELETE') => {
//   const options = {
//     method,
//     timeout: 60 * 60 * 1000,
//     url: `${process.env.REACT_APP_BASE_URL_FOR_UPLOAD}${url}`,
//   }
//   return axios(options)
// }

const getToken = () => !!cookie.get('user') ? localStorage.getItem('token') : null

export default api
