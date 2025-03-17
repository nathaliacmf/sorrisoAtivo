import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";

import MissoesSorrisoAtivo from "../components/MissoesSorrisoAtivo"; // Importando o novo componente

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

      <TouchableOpacity style={styles.exchangeButton} onPress={() => navigation.navigate("TrocarPontos")}>
        <Text style={styles.exchangeText}>Trocar Pontos {'>'}</Text>
      </TouchableOpacity>

      <MissoesSorrisoAtivo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  pointsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004AAD",
  },
  pointsValue: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004AAD",
  },
  pointsUnit: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: "#888",
  },
  exchangeButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#007AFF",
    alignItems: "center",
    marginBottom: 20,
  },
  exchangeText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default SorrisoAtivo;
