import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper'; // Importando o ProgressBar

export default function Recompensas() {
  return (
    <>
      <View style={styles.recompensaBox}>
        <Ionicons name="close-circle" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Desconto de 40% em sua próxima mensalidade</Text>
          <Text style={styles.pontosParaResgatar}>
            Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>6000 pontos</Text>
          </Text>
          <ProgressBar progress={0 / 6000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 6000 pontos</Text>
        </View>
      </View>

      <View style={styles.recompensaBox}>
        <Ionicons name="cart-outline" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Vale Compra de R$ 50,00</Text>
          <Text style={styles.pontosParaResgatar}>
            Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>8000 pontos</Text>
          </Text>
          <ProgressBar progress={0 / 8000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 8000 pontos</Text>
        </View>
      </View>

      <View style={styles.recompensaBox}>
        <Ionicons name="car-outline" size={30} color="red" />
        <View style={styles.recompensaContent}>
          <Text style={styles.recompensaTitle}>Desconto de 10% em qualquer produto</Text>
          <Text style={styles.pontosParaResgatar}>
            Pontos para resgatar: <Text style={{ fontWeight: 'bold', color: 'green' }}>5000 pontos</Text>
          </Text>
          <ProgressBar progress={0 / 5000} color="#007bff" style={styles.progressBar} />
          <Text style={styles.progresso}>Progresso: 0 de 5000 pontos</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  progressBar: {
    height: 8,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginVertical: 6,
  },
});
