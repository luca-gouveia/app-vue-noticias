import { http } from './config'

export default {
    listar: () => {
        return http.get('data')
    },
    selecionar: (country) => {
        return http.post('country', country)
    }
}