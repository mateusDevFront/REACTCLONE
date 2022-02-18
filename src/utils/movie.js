// gerar uma lista de filmes //

export function getListMovies(size, movies){
    let popularMovies = []

    for(let i = 0, l = size; i < l; i++){
        popularMovies.push(movies[i])
    }
    return popularMovies;
}

// Banner do aplicativo //
// gerar um número aleatorio com base na lista de filmes//


export function randomBanner(movies){
    return Math.floor(Math.random() * movies.length)
}