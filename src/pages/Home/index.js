import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'

import { AuthContext } from '../../Contexts/Auth'

import {
    Container,
    SearchButton,
    SearchContainer,
    Input,
    Title,
    BannerButton,
    Banner,
    SliderMovie,
} from './styles'

import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api'
import { getListMovies, randomBanner } from '../../utils/movie'

import { useNavigation } from '@react-navigation/native'

function Home() {


    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [bannerMovie, setBannerMovie] = useState({});
    const [input, setInput] = useState('')
    
    const navigation = useNavigation()

    useEffect(() => {
        let isActive = true;
        const ac = new AbortController()

        async function getMovies() {

            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        languagem: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        languagem: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        languagem: 'pt-BR',
                        page: 1
                    }
                }),
            ])

            if (isActive) {
                const nowList = getListMovies(10, nowData.data.results)
                const popularList = getListMovies(5, popularData.data.results)
                const topList = getListMovies(5, topData.data.results)

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])

                setNowMovies(nowList)
                setPopularMovies(popularList)
                setTopMovies(topList)

                setLoading(false)
            }
        }
        getMovies()

        return () => {
            isActive = false;
            ac.abort();
        }
    }, [])

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', {
            id: item.id
        })
    }

    //Função para buscar de filmes
    function handleSearch(){
        //verifica se foi digitado
        if(input === '') return;
        navigation.navigate('Search', { name: input})
        setInput('')
    }

    if (loading) {
        return (
            <Container>
                <ActivityIndicator
                    size='large'
                    color='white'
                />
            </Container>
        )
    }
    return (
        <Container>
            <Header/>
            <SearchContainer>
                <Input
                    placeholder="Digite seu filme..."
                    placeholderTextColor="#ddd"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <SearchButton onPress={handleSearch}>
                    <Feather
                        name="search"
                        size={30}
                        color="white" />
                </SearchButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator>
                <Title>Em cartaz</Title>

                <BannerButton
                    activeOpacity={0.5}
                    onPress={() => navigateDetailsPage(bannerMovie)}>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                    />
                </BannerButton>
                <SliderMovie
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={nowMovies}
                    renderItem={({ item }) => <SliderItem data={item}
                        navigatePage={() => navigateDetailsPage(item)}
                    />}
                    keyExtractor={(item) => String(item.id)}
                />
                <Title>Populares</Title>
                <SliderMovie
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={popularMovies}
                    renderItem={({ item }) => <SliderItem data={item}
                        navigatePage={() => navigateDetailsPage(item)}
                    />}
                    keyExtractor={(item) => String(item.id)}
                />
                <Title>Mais votados</Title>
                <SliderMovie
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={topMovies}
                    renderItem={({ item }) => <SliderItem data={item}
                        navigatePage={() => navigateDetailsPage(item)}
                    />}
                    keyExtractor={(item) => String(item.id)}
                />
            </ScrollView>

        </Container>
    )
}
export default Home;