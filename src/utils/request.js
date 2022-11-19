import axios from 'axios'
// http://toutiao.itheima.net (备用)
const request = axios.create({
  baseURL: 'http://geek.itheima.net'
})
export default request
