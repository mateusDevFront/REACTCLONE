import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: black;
`
export const Name = styled.Text`
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 28px;
    font-weight: bold;
    color: white;
`
export const Email = styled.Text`
    color: white;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 18px;
    font-style: italic;
`
export const Button = styled.TouchableOpacity`
    margin-top: 16px;
    background-color: ${props => props.bg};
    width: 80%;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

`
export const ButtonText = styled.Text`
    font-size: 20px;
    color: ${props => props.color};
    font-size: 18px;
`
export const UploadButton = styled.TouchableOpacity`
    margin-top: 20%;
    background-color: white;
    width: 165px;
    height: 165px;
    border-radius: 90px;
    justify-content: center;
    align-items: center;
    z-index: 8;

`
export const UploadText = styled.Text`
    font-size: 55px;
    position: absolute;
    color: red;
    opacity: 0.0;
    z-index: 99;
`
export const Avatar = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    opacity: 0.9;
`
export const ModalContainer = styled.View`
    width: 100%;
    height: 80%;
    background-color:  #fff;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;

`
export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    left: 25px;
    flex-direction: row;
    align-items: center;
`
export const Input = styled.TextInput`
    background-color: #ddd;
    width: 80%;
    border-radius: 8px;
    padding: 16px;
    font-size: 18px;
    color: #121212;
    text-align: center;
`
