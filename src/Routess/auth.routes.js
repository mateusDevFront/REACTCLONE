import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp';
import AppRoutes from './app.routes'
import Detail from '../pages/Detail'
import Search from '../pages/Search'
import Profile from '../pages/Profile'

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SingIn"
                component={SingIn}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen 
                name="SingUp"
                component={SingUp}
                options={{
                    headerStyle:{
                        backgroundColor: 'black',
                        borderBottomWidth: 1,
                        borderBottomColor: 'red'
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
            <AuthStack.Screen 
                name="Home"
                component={AppRoutes}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen 
                name="Search"
                component={Search}
                options={{
                    headerStyle:{
                        backgroundColor: 'black',
                        borderBottomWidth: 1,
                        borderBottomColor: 'red'
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Filmes & Séries encontrados'
                }}
            />
            <AuthStack.Screen 
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </AuthStack.Navigator>
    )
}
export default AuthRoutes