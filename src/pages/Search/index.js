import React, {useState, useEffect} from 'react'
import {
    Container,
    ListMovies
} from './styles'

import SearchItem from '../../components/SearchItem'

import api, { key} from '../../services/api'

import { useNavigation, useRoute } from '@react-navigation/native'

function Search(){
    //começa com uma lista vazia
    const [movie, setMovie] = useState({})

    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        let isActive = true

        async function getSearch(){
            const response = await api.get('/search/movie', {
                params: {
                    query: route.params?.name,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1
                }
            })
            if(isActive){
                setMovie(response.data.results)
                setLoading(false)
            }
        }
        if(isActive){
            getSearch()
        }
        return () => {
            isActive = false
        }
    }, [])

    if(loading){
        return(
            <Container></Container>
        )
    }

    function navigateDetailsPage(item){
        navigation.navigate('Detail', {id: item.id})
    }

    return(
        <Container>
            <ListMovies 
                data={movie}
                showsVerticalScrollIndicator={false}
                KeyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <SearchItem data={item}
                navigatePage={() => navigateDetailsPage(item) }/>}

            />
        </Container>
    )
}
export default Search;