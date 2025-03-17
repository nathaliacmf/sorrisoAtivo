import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Missoes from "../pages/Missoes";
import SorrisoAtivo from "../pages/SorrisoAtivo";
import RealizarMissao from "../pages/RealizarMissao";
import TrocarPontos from "../pages/TrocarPontos";

// Defina o tipo StackParamList
export type StackParamList = {
    SignIn: undefined;  
    SignUp: undefined; 
    Home: undefined;
    SorrisoAtivo: undefined;
    Missoes: undefined;
    TrocarPontos: undefined;
    RealizarMissao: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{ headerShown: false }} 
            />

            <Stack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#007AFF', 
                    },
                    headerTintColor: '#fff', 
                    headerTitle: 'Voltar',
                }} 
            />

            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false }} 
            />

            <Stack.Screen 
                name="SorrisoAtivo" 
                component={SorrisoAtivo}
                options={{
                    headerStyle: {
                        backgroundColor: '#007AFF', 
                    },
                    headerTintColor: '#fff', 
                    headerTitle: 'Sorriso Ativo',
                    headerTitleAlign: 'center',
                }} 
            />

            <Stack.Screen 
                name="Missoes" 
                component={Missoes}
                options={{
                    headerStyle: {
                        backgroundColor: '#007AFF', 
                    },
                    headerTintColor: '#fff', 
                    headerTitle: 'Sorriso Ativo - Missões',
                    headerTitleAlign: 'center',
                }} 
            />

            <Stack.Screen 
                name="TrocarPontos" 
                component={TrocarPontos}
                options={{
                    headerStyle: {
                        backgroundColor: '#007AFF', 
                    },
                    headerTintColor: '#fff', 
                    headerTitle: 'Sorriso Ativo - Trocar Pontos',
                    headerTitleAlign: 'center',
                }} 
            />

            <Stack.Screen 
                name="RealizarMissao" 
                component={RealizarMissao}
                options={{
                    headerStyle: {
                        backgroundColor: '#007AFF', 
                    },
                    headerTintColor: '#fff', 
                    headerTitle: 'Sorriso Ativo - Realizar Missão',
                    headerTitleAlign: 'center',
                }} 
            />
        </Stack.Navigator>
    );
}

export default StackRoutes;