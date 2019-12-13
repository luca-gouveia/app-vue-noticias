import { httpLerMaisTarde } from './config'

export default {
    listar: () => {
        return httpLerMaisTarde.get('noticias')
    },
    marcarLerDepois: (noticia) => {
        return httpLerMaisTarde.post('noticia', noticia)
    },
    remover: (noticia) => {
        return httpLerMaisTarde.delete('noticia', noticia)
    }
    
}