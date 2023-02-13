import request from "../utils/request";

export const getRegister = (data) => {
  return request({method: 'post', url: '/api/v1/user/register', data})
}

export const getLogin = (data) => {
  return request({method: 'post', url: '/api/v1/user/login', data})
}

export const getUserInfo = ()=> {
  return request({method:'get', url:'/api/v1/user/userInfo'})
}


//obtain courselist api
export const getCourse =(data)=> {
  return request({method: 'get', url: '/api/v1/course/find', data})
}

export const updateCourse =(data) => {
  return request({method:'get', url:'/api/v1/course/update', data})
}

export const deleteCourse =(data) => {
  return request({method:'get', url:'/api/v1/course/delete', data})
}

export const searchCourse =(data) => {
  console.log("🚀 ~ file: index.js:30 ~ searchCourse ~ data", data)
  return request({method:'get', url:'/api/v1/course/search', data})
}