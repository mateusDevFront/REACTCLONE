import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    background-color: black;
    flex: 1;
    padding: 4px 0;

`
export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`
export const Input = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.1);
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 30px;
    font-size: 20px;
    color: white;
`
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    padding-top: 20px;
    padding-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    padding-left: 20px;
    padding-right: 14px;
`
export const BannerButton = styled.TouchableOpacity`
`
export const Banner = styled.Image`
    height: 150px;
    border-radius: 6px;
    margin: 0 14px;
`
export const SliderMovie = styled.FlatList`
    height: 250px;
    padding: 0 14px;
`
export const Button = styled.TouchableOpacity`
width: 40%;
height: 45px;
border-radius: 8px;
background-color: #E72F49;
justify-content: center;
align-items: center;
margin-top: 30px;
margin-bottom: 30px;
margin-Left: 130px;
`
export const Text = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`
export const Logout = styled.TouchableOpacity`
    align-items: flex-end;
    justify-content: flex-end;
`