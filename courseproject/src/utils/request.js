import axios from 'axios';
import { ElMain, ElMessage } from 'element-plus';
import router from '../router/index'

const ENV= process.env.NODE_ENV
const host = ENV === 'development' ? "http://localhost:3000" : "18.221.113.15"
console.log("🚀 ~ file: request.js:7 ~ ENV", ENV)
const service = axios.create({
  baseURL: host,
  timeout: '3000s',
})

service.interceptors.request.use((config)=> {
  if(config.url.indexOf('register') < 0 && config.url.indexOf('login')<0) {
    config.headers.Authorization = localStorage.getItem('token');
  }
  return config;
})

service.interceptors.response.use((res)=> {
  const {token, code, message} = res.data;
  if (code === 0) {
    return res.data;
  }else {
    ElMessage({
      message: message,
      type:'error',
    })
  }

  if (message === "authorization failed") {
    router.push('/login')
  }
})

const request =(options) => {
  if(options.method === 'get') {
    options.params = options.data
  }
  return service(options)
}


export default request; 