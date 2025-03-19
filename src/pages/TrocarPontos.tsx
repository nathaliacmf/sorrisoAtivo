import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import PontosUsuario from '../components/PontosUsuario';
import Recompensas from '../components/Recompensas';

export default function TrocarPontos() {
  return (
    <ScrollView style={styles.container}>
      {/* Descrição */}
      <Text style={styles.description}>
        Troque seus pontos por prêmios e benefícios exclusivos!
      </Text>
      <PontosUsuario/>
      {/* Recompensas Resgatadas */}
      <Text style={styles.sectionTitle}>Recompensas Resgatadas</Text>

      {/* Recompensas para Resgatar */}
      <Text style={styles.sectionTitle}>Recompensas para Resgatar</Text>
      <Recompensas/>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 20,
    marginBottom: 10,
  },
});
