import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api-gateway-nodejs.herokuapp.com/api/'
})

export const httpLerMaisTarde = axios.create({
    baseURL: 'https://api-spring-1.herokuapp.com/api/'
})
