import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Profile from '../pages/Profile'

const Drawer = createDrawerNavigator();

function AppRoutes() {

    return (
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: "#090A0E",
                        paddingTop: 20,
                    },
                    drawerActiveBackgroundColor: 'red',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff'

                }}>
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Início',
                        drawerIcon: ({ focused, size, color }) => (
                            <MaterialCommunityIcons
                                name={focused ? "movie-open" : "movie-outline"}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Movies'
                    component={Movies}
                    options={{
                        title: "Favoritos",
                        drawerIcon: ({ focused, size, color }) => (
                            <MaterialCommunityIcons
                                name={focused ? "archive" : "archive-outline"}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='perfil'
                    component={Profile}
                    options={{
                        title: "Meu Perfil",
                        drawerIcon: ({ focused, size, color }) => (
                            <MaterialCommunityIcons
                                name={focused ? "account-circle" : "account-circle-outline"}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
    )
};
export default AppRoutes;
