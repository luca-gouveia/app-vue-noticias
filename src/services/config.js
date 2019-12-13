import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const httpLerMaisTarde = axios.create({
    baseURL: 'http://localhost:8080/api/'
})