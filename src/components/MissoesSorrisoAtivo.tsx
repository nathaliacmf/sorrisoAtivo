import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function MissoesSorrisoAtivo() {
  type NavigationProps = NativeStackNavigationProp<any, "Home">; // Adapte o tipo conforme sua rota
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      {/* Missão 1 */}
      <View style={styles.missionCard}>
        <Text style={styles.missionHeader}>📸 Tirar foto escovando os dentes</Text>
        <Text style={styles.missionType}>Diária</Text>
        <Text style={styles.missionReward}>Recompensa: 25 pontos</Text>
        <Text style={styles.missionStatus}>Status: Não concluída</Text>
        <Text style={styles.missionTime}>Tempo restante: 13h54m40s</Text>
        <TouchableOpacity style={styles.missionButton} onPress={() => navigation.navigate("RealizarMissao")}>
          <Text style={styles.missionButtonText}>Realizar Missão</Text>
        </TouchableOpacity>
      </View>

      {/* Missão 2 */}
      <View style={styles.missionCard}>
        <Text style={styles.missionHeader}>🦷 Consulta dentista</Text>
        <Text style={styles.missionType}>Mensal</Text>
        <Text style={styles.missionReward}>Recompensa: 500 pontos</Text>
        <Text style={styles.missionStatus}>Status: Não concluída</Text>
        <Text style={styles.missionTime}>Tempo restante: 24 dias</Text>
        <TouchableOpacity style={styles.missionButton} onPress={() => navigation.navigate("RealizarMissao")}>
          <Text style={styles.missionButtonText}>Realizar Missão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  missionCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  missionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  missionType: {
    fontSize: 14,
    color: "#555",
  },
  missionReward: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#008000",
  },
  missionStatus: {
    fontSize: 14,
    color: "#ff0000",
  },
  missionTime: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
  missionButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  missionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
