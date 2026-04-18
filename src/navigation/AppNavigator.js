import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import Inicio from "../screens/Inicio";
import EquipoTrabajo from '../screens/EquipoTrabajo';
import DescripcionProyecto from '../screens/DescripcionProyecto';
import Materiales from '../screens/Materiales';
import Funcionamiento from '../screens/Funcionamiento';
import Galeria from '../screens/Galeria';
import Conclusiones from '../screens/Conclusiones';
import Creditos from '../screens/Creditos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'Inicio'
                component={Inicio}
                options={{title: 'Inicio'}}
            />
            <Stack.Screen
                name="Equipo"
                component={EquipoTrabajo}
                options={{title: 'Equipo'}}
            />
            <Stack.Screen
                name="Descripcion"
                component={DescripcionProyecto}
                options={{title: 'Descripción'}}
            />
            <Stack.Screen
                name="Materiales"
                component={Materiales}
                options={{title: 'Materiales'}}
            />
            <Stack.Screen
                name="Funcionamiento"
                component={Funcionamiento}
                options={{title: 'Funcionamiento'}}
            />
            <Stack.Screen
                name="Galeria"
                component={Galeria}
                options={{title: 'Descripción'}}
            />
            <Stack.Screen
                name="Conclusiones"
                component={Conclusiones}
                options={{title: 'Conclusión'}}
            />
            <Stack.Screen
                name="Creditos"
                component={Creditos}
                options={{title: 'Creditos'}}
            />

        </Stack.Navigator>
    )
}
export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=> ({
                    tabBarIcon: ({color, size}) => {
                        let iconName;
                        if (route.name=='Inicio'){
                            iconName = "home";
                        } else if (route.name=='Equipo'){
                            iconName = 'people'
                        } else if (route.name=='Descripcion'){
                            iconName = 'document-text'
                        } else if (route.name=='Materiales'){
                            iconName = 'cube'
                        } else if (route.name=='Funcionamiento'){
                            iconName = 'construct'
                        } else if (route.name=='Galeria'){
                            iconName = 'images'
                        } else if (route.name=='Conclusiones'){
                            iconName = 'checkmark-done'
                        } else if (route.name=='Creditos'){
                            iconName = 'ribbon'
                        }
                        return <Ionicons name={iconName} size={28} color={color}/>;
                    },
                    tabBarActiveTintColor: '#05325f',
                    tabBarInactiveTintColor: '#dadada',
                    tabBarLabelStyle:{
                        fontSize: 10,
                        fontWeight: '400',
                    },
                    tabBarStyle:{
                        height: 70,
                        paddingBottom: 8,
                        //backgroundColor: "#EEBC1D",
                        backgroundColor: "#5d5e5f"

                    }
                })}
            >
                <Tab.Screen
                    name = 'Inicio'
                    component={Inicio}
                    options={{title: 'Inicio'}}
                />
                <Tab.Screen
                    name="Equipo"
                    component={EquipoTrabajo}
                    options={{title: 'Equipo'}}
                />
                <Tab.Screen
                    name="Descripcion"
                    component={DescripcionProyecto}
                    options={{title: 'Descripción'}}
                />
                <Tab.Screen
                    name="Materiales"
                    component={Materiales}
                    options={{title: 'Materiales'}}
                />
                <Tab.Screen
                    name="Funcionamiento"
                    component={Funcionamiento}
                    options={{title: 'Funcionamiento'}}
                />
                <Tab.Screen
                    name="Galeria"
                    component={Galeria}
                    options={{title: 'Galeria'}}
                />
                <Tab.Screen
                    name="Conclusiones"
                    component={Conclusiones}
                    options={{title: 'Conclusion'}}
                />
                <Tab.Screen
                    name="Creditos"
                    component={Creditos}
                    options={{title: 'Creditos'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};