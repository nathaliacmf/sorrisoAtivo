import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function SignIn() {
    type NavigationProps = NativeStackNavigationProp<StackParamList, 'SignIn'>;
    const navigation = useNavigation<NavigationProps>();

    return (
        
            <View style={styles.container}>
                <Image 
                    source={require('../assets/image.png')} 
                    style={styles.logo}
                />

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
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity 
                    style={styles.submitButton} 
                    activeOpacity={0.7} 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.submitText}>Acessar Conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Crie uma conta!</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    logo: {
        marginBottom: 15,
        height: 105,
        width: 200,
    },
    areaInput: {
        width: "100%",
    },
    input: {
        backgroundColor: '#FFF',
        width: "100%",
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15
    },
    submitButton: {
        width: "100%",
        height: 45,
        borderRadius: 8,
        backgroundColor: '#007AFF',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        fontSize: 20,
        color: '#FFF',
    },
    link: {
        marginTop: 10,
        marginBottom: 10,
    },
    linkText: {
        color: '#171717',
        justifyContent: 'center'
    }
});
