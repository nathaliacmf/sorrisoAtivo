import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function PontosUsuario() {
  const [pontos, setPontos] = useState<number>(0); // Estado para armazenar os pontos
  const meta = 6000; // Meta fixa

  // Simulação de busca de dados (substituir por API real)
  //useEffect(() => {
    //async function fetchPontos() {
      //try {
        //const response = await fetch("https://api.exemplo.com/pontos");
        //const data = await response.json();
        //setPontos(data.pontos);
      //} catch (error) {
        //console.error("Erro ao buscar pontos:", error);
        //setPontos(0); // Se der erro, mantém 0 pontos
      //}
    //}

    //fetchPontos();
  //}, []);

  const progresso = meta > 0 ? pontos / meta : 0; // Evita divisão por zero

  return (
    <View style={styles.container}>
      <Text style={styles.pontosLabel}>Você tem:</Text>
      <Text style={styles.pontos}>{pontos}</Text>
      <Text style={styles.pontosUnidade}>pontos</Text>
      <ProgressBar progress={progresso} color="#007bff" style={styles.progressBar} />
      <Text style={styles.proximoPontos}>{meta - pontos} pontos até a próxima recompensa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 16,
    borderRadius: 8,
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
    width: '100%',
    marginVertical: 6,
  },
  proximoPontos: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
});
