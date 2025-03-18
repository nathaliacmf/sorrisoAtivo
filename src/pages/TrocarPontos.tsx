import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; 

export default function TrocarPontos() {
  return (
    <ScrollView style={styles.container}>
      {/* Descrição */}
      <Text style={styles.description}>
        Troque seus pontos por prêmios e benefícios exclusivos!
      </Text>

      {/* Pontuação Atual */}
      <View style={styles.pontosContainer}>
        <Text style={styles.pontosLabel}>Você tem:</Text>
        <Text style={styles.pontos}>0</Text>
        <Text style={styles.pontosUnidade}>pontos</Text>
      </View>

      {/* Barra de Progresso */}
      <ProgressBar progress={0 / 5500} color="#007bff" style={styles.progressBar} />
      <Text style={styles.proximoPontos}>6000 pontos até a próxima recompensa</Text>

      {/* Recompensas Resgatadas */}
      <Text style={styles.sectionTitle}>Recompensas Resgatadas</Text>

      {/* Recompensas para Resgatar */}
      <Text style={styles.sectionTitle}>Recompensas para Resgatar</Text>
      
      <View style={styles.recompensaBox}>
        <Ionicons name="close-circle" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Desconto de 40% em sua próxima mensalidade</Text>
          <Text style={styles.pontosParaResgatar}>Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>6000 pontos</Text></Text>
          <ProgressBar progress={0 / 6000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 6000 pontos</Text>
        </View>
      </View>


      <View style={styles.recompensaBox}>
        <Ionicons name="gift-outline" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Boné Sorriso Ativo</Text>
          <Text style={styles.pontosParaResgatar}>Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>20000 pontos</Text></Text>
          <ProgressBar progress={0 / 20000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 20000 pontos</Text>
        </View>
      </View>


      <View style={styles.recompensaBox}>
        <Ionicons name="cart-outline" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Vale Compra de R$ 50,00</Text>
          <Text style={styles.pontosParaResgatar}>Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>8000 pontos</Text></Text>
          <ProgressBar progress={0 / 8000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 8000 pontos</Text>
        </View>
      </View>

      <View style={styles.recompensaBox}>
        <Ionicons name="car-outline" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Desconto de 10% em qualquer produto</Text>
          <Text style={styles.pontosParaResgatar}>Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>5000 pontos</Text></Text>
          <ProgressBar progress={0 / 5000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 5000 pontos</Text>
        </View>
      </View>

    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginVertical: 12,
  },
  pontosContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  pontosLabel: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  pontos: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  pontosUnidade: {
    fontSize: 14,
    color: '#555',
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginVertical: 6,
  },
  proximoPontos: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 20,
    marginBottom: 10,
  },
  recompensaBox: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  recompensaContent: {
    marginLeft: 10,
    flex: 1,
  },
  recompensaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  pontosParaResgatar: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  progresso: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});
