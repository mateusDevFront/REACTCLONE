import styled from 'styled-components'

export const Container = styled.View`
    background-color: rgba(0, 0, 0, 0.7 );
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 50%;
    height: 10%;
    margin-bottom: 30px;
`
export const ImageBackground = styled.ImageBackground.attrs({
    resizeMode: 'stretch'
})`
    flex: 1;
`

export const ContainerInput = styled.View`
    width: 80%;
    padding: 0 15px 0 0;
    background-color:rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
    border-radius: 8px;
`
export const ContainerInput2 = styled.View`
    flex-direction: row;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.1);
    height: 45px;
    padding: 0 15px 0 0;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
`
export const TouchableOpacity = styled.TouchableOpacity`
   width: 15%;
   height: 50px;
   justify-content: center;
   align-items: center;
`
export const Input = styled.TextInput`
    width: 90%;
    height: 45px;
    padding: 10px;
    color: white;
`
export const Input2 = styled.TextInput`
    width: 90%;
    height: 45px;
    padding: 10px;
    color: white;
`
export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 45px;
    border-radius: 8px;
    background-color: red;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
export const Text = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`