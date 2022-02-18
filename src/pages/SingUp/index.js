import React, {useState, useContext} from 'react'
import firebase from '../../config/firebaseConnection'
import {
    Container,
    ImageBackground,
    Input,
    ContainerInput,
    Button,
    Text,
    ContainerInput2,
    Input2,
    TouchableOpacity
} from '../SingIn/styles'

import { Platform } from 'react-native'

import { Ionicons } from '@expo/vector-icons'


import { AuthContext } from '../../Contexts/Auth'

import imagebackground from '../../assets/login.jpg'

export function SingUp() {

    // Capturando os valores dos Inputs//
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)

    const { signUp } = useContext(AuthContext)

     function createUserFirebase(){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message
            alert('Preencha seus Dados')
        }
        )} 

    
    return (
        <ImageBackground source={imagebackground}>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding': ''}
            enable >     

                <ContainerInput>
                    <Input
                    placeholder="Nome"
                    placeholderTextColor="#FFFFFF"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    />
                </ContainerInput>

                <ContainerInput>
                    <Input
                    placeholder="Email"
                    placeholderTextColor="#FFFFFF"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                </ContainerInput>

                <ContainerInput2>
                    <Input2
                        placeholder='Senha'
                        placeholderTextColor="#fff"
                        value={password}
                        onChangeText= {(text) => setPassword(text)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            { hidePass ?
                                <Ionicons
                                name="eye"
                                color="#fff"
                                size={25}
                                />
                                :
                                <Ionicons
                                name="eye-off"
                                color="#fff"
                                size={25}
                                />
                            }   
                        </TouchableOpacity>
                    
                </ContainerInput2>

                <Button onPress={createUserFirebase}>
                    <Text>Cadastrar</Text>
                </Button>

            </Container> 
        </ImageBackground>
    )
}
export default SingUp;