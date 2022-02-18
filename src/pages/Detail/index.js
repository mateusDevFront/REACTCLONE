import React, { useState, useEffect } from 'react'
import {
    Container,
    Header,
    HeaderButton,
    Banner,
    ButtonLink,
    Title,
    ContentArea,
    Rate,
    ListGenres,
    Description
} from './styles'

import { ScrollView, Modal } from 'react-native'

import { Feather, Ionicons } from '@expo/vector-icons'
import Stars from 'react-native-stars'

import Genres from '../../components/Genres'
import ModalLink from '../../components/ModalLink'

import { saveMovie } from '../../utils/Storage'

import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'


function Detail() {
    
    const navigation = useNavigation()
    const route = useRoute()
    
    const [movie, setMovie] = useState({})
    const [openLink, setOpenLink] = useState(false)

    useEffect(() => {
        let isActive = true;

        async function getMovie(){
            const response = await api.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR'
                }
            })
            .catch((err) =>{
                console.log(err)
            })
            if(isActive){
                setMovie(response.data)
            }
        }
        if(isActive){
            getMovie()
        }

        return(() => {
            isActive = false
        })
    }, [])

    //Função para salvar um filme na lista de favoritos
    async function favoriteMovie(movie){
        await saveMovie('reactFlix', movie)
        alert('Filme salvo com sucesso')
    }

    return (
        <Container>
            <Header>
                <HeaderButton activeOpacity={0.7}
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="white"
                    />
                </HeaderButton>
                <HeaderButton onPress={() => favoriteMovie(movie)}>
                    <Ionicons
                        name="bookmark-outline"
                        size={28}
                        color="white"
                    />
                </HeaderButton>
            </Header>
            <Banner
                resizeMethod="resize"
                source={{uri : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
            />
            <ButtonLink onPress={() => setOpenLink(true)}>
                <Feather 
                    name="link"
                    size={24}
                    color="#fff"
                />
            </ButtonLink>

            <Title numberOfLines={1}>{movie.title}</Title>
            
            <ContentArea>
                <Stars 
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}

                    fullStar={ <Ionicons name="md-star" size={24} color="#E7A74E"/>}
                    emptyStar={ <Ionicons name="md-star-outline" size={24} color="#E7A74E"/>}
                    halfStar={<Ionicons name="md-star-half" size={24} color="#E7A74E"/>}
                    disable={true}
                />
                <Rate>5/10</Rate>
            </ContentArea>

            <ListGenres 
                data={movie?.genres}
                horizontal={true}
                showHorizontalScrollIndicator={false}
                keyExtractor={ (item) => String(item.id)}
                renderItem={({item}) => <Genres data={item}/>}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title> Descrição </Title>
                <Description>
                    {movie?.overview}
                </Description>
            </ScrollView>

            <Modal animationType='slide' transparent={true} visible={openLink}>
                <ModalLink
                    link={movie?.homepage}
                    title={movie?.title}
                    closeModal={() => setOpenLink(false)}
                />
            </Modal>

        </Container>
    )
}

export default Detail