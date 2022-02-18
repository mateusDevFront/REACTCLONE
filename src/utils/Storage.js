import AsyncStorage from '@react-native-async-storage/async-storage'

//Buscar os Filmes salvos
export async function getMovieSave() {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JASON.parse(myMovies) || [];
    return moviesSave;
}

//Salvar um novo Filme
 export async function saveMovie(key, newMovie) {
    let moviesStored = await getMovieSave(key, newMovie)

    //se tiver algum filme com o msm ID ou DUPLICADO ele será ignorado
    const hasMovie = moviesStored.some(item => item?.id === newMovie?.id)

    if (hasMovie) {
        console.log('ja existe')
        return
    } else {
        moviesStored.push(newMovie)

        await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
        console.log('filme salvo com sucesso')
        return
    }


} 
//Deletar um filme específico

//Filtrar um filme que já foi salvo