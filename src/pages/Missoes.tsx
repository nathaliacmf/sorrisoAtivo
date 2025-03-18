import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MissoesSorrisoAtivo from "../components/MissoesSorrisoAtivo";


export default function Missoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>
        Realize missões para obter pontos. Seus pontos podem ser trocados por prêmios e benefícios exclusivos!
      </Text>

      <Text style={[styles.sectionTitle, styles.missionsCompleted]}>Missões Concluídas</Text>

      <Text style={[styles.sectionTitle, styles.missionsActive]}>Missões Ativas</Text>
      <MissoesSorrisoAtivo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  subHeader: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF", 
  },
  missionsCompleted: {
    marginBottom: 20, // Adiciona um espaço abaixo de "Missões Concluídas"
  },
  missionsActive: {
    marginTop: 20, // Adiciona um espaço acima de "Missões Ativas"
  },
});
