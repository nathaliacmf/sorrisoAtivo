import React, { useContext } from "react";
import { Platform } from "react-native";

import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from "../pages/Home";

export default function SignIn() {
    
    //const { user } = useContext(AuthContext)

    //function handleSignUp(){
       //console.log(user.nome);
        //alert("Teste")
    //}

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();


    return (
        <View style={styles.background}>
            <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            enabled>

            <Image source={require('../assets/image.png')} 
                style={{marginBottom: 15, height: 105, width: 200}}
                />

            <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888" 
                />
            </View> 

            <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888" 
                />
            </View>

            <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888" 
                />
            </View>

            <TouchableOpacity style={styles.submitButton} activeOpacity={0.7} onPress={ () => navigation.navigate('Home')}>
                <Text style={styles.submitText}>Criar Conta</Text>
                
            </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#F0F4FF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaInput:{
        flexDirection: 'row',
    },
    input:{
        backgroundColor: '#FFF',
        width: "90%",
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    },
    submitButton:{
        width: "90%",
        height: 45,
        borderRadius: 8,
        backgroundColor: '#007AFF',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText:{
        fontSize: 20,
        color: '#FFF',
    },
    link:{
        marginTop: 10,
        marginBottom: 10,
    },
    linkText:{
        color: '#171717',
        justifyContent: 'center'
    }
  });