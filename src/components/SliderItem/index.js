import React from 'react'

import {
    Container,
    BannerItem,
    RateContainer,
    Rate,
    Title
} from './styles'

import {Ionicons} from '@expo/vector-icons'

function SliderItem({ data, navigatePage }) {
    return (
        <Container activeOpacity={0.5}
            onPress={() => navigatePage(data)}>
            <BannerItem
                source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
            />
            <Title
                numberOflines={1}>{data.title}</Title>
            <RateContainer>
                <Ionicons 
                    name="md-star"
                    size={12}
                    color="#D7A74D"  />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}
export default SliderItem;