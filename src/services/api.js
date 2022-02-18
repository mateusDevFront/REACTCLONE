import axios from 'axios';

//url filmes em cartaz\\
// https://api.themoviedb.org/3/

//movie/now_playing?api_key=e5f25f5d7084683d80504b58889f704e&language=pt-br&page=1

export const key = 'e5f25f5d7084683d80504b58889f704e'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;