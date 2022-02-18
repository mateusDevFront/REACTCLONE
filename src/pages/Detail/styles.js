import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background-color: black;
`
export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
`
export const HeaderButton = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    background-color: rgba(25,26,48, 0.8);
    border-radius: 26px;
    justify-content: center;
    align-items: center;
`
export const Banner = styled.Image`
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
`
export const ButtonLink = styled.TouchableOpacity`
    background-color: red;
    width: 63px;
    height: 63px;
    border-radius: 35px;
    position: absolute;
    top: 300px;
    right: 15px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`
export const Title = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 8px;
    

`
export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`
export const Rate = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`
export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: 35px;
    min-height: 35px;
`
export const Description = styled.Text`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
    color: white;
    line-height: 20px;
`