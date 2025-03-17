import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/stack.routes"; // Certifique-se de importar corretamente
import { useNavigation } from "@react-navigation/native";

import Missoes from "./Missoes";

const SorrisoAtivo = () => {

  type NavigationProps = NativeStackNavigationProp<StackParamList, "Home">;
  
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Acumule pontos mantendo sua saúde bucal através de consultas, desafios e registro de hábitos. 
        Seus pontos podem ser trocados por prêmios e benefícios exclusivos!
      </Text>
      
      <Text style={styles.pointsLabel}>Você tem:</Text>
      <Text style={styles.pointsValue}>0</Text>
      <Text style={styles.pointsUnit}>pontos</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>1250 pontos até a próxima recompensa</Text>
      </View>
      
      <TouchableOpacity style={styles.exchangeButton} onPress={ () => navigation.navigate('TrocarPontos')}>
        <Text style={styles.exchangeText}>Trocar Pontos {'>'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Missoes')}>
        <Text style={styles.missionTitleLink}>Missões {'>'}</Text>
      </TouchableOpacity>
      
      <View style={styles.missionCard}>
        <Text style={styles.missionHeader}>📸 Tirar foto escovando os dentes</Text>
        <Text style={styles.missionType}>Diária</Text>
        <Text style={styles.missionReward}>Recompensa: 25 pontos</Text>
        <Text style={styles.missionStatus}>Status: Não concluída</Text>
        <Text style={styles.missionTime}>Tempo restante: 13h54m40s</Text>
        <TouchableOpacity style={styles.missionButton} onPress={ () => navigation.navigate('RealizarMissao')}>
          <Text style={styles.missionButtonText}>Realizar Missão</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.missionCard}>
        <Text style={styles.missionHeader}>🦷 Consulta dentista</Text>
        <Text style={styles.missionType}>Mensal</Text>
        <Text style={styles.missionReward}>Recompensa: 500 pontos</Text>
        <Text style={styles.missionStatus}>Status: Não concluída</Text>
        <Text style={styles.missionTime}>Tempo restante: 24 dias</Text>
        <TouchableOpacity style={styles.missionButton} onPress={ () => navigation.navigate('RealizarMissao')}>
          <Text style={styles.missionButtonText}>Realizar Missão</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  pointsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004AAD',
  },
  pointsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004AAD',
  },
  pointsUnit: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#888',
  },
  exchangeButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    alignItems: 'center',
    marginBottom: 20,
  },
  exchangeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  missionTitleLink: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF', // Azul padrão de links
    marginBottom: 10,
  },
  missionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  missionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  missionType: {
    fontSize: 14,
    color: '#555',
  },
  missionReward: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008000',
  },
  missionStatus: {
    fontSize: 14,
    color: '#ff0000',
  },
  missionTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  missionButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  missionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SorrisoAtivo;
