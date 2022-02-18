import React from 'react'

import { Feather } from '@expo/vector-icons'

import {
    Container,
    MenuButton,
    Logo
} from './styles'

import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

function Header(){

    const navigation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()}>
                <Feather
                    name="menu"
                    size={36}
                    color='red'
                />
            </MenuButton>
            <Logo source={logo} />
        
        </Container>
    )
}
export default Header;