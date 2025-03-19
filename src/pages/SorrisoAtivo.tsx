import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";

import MissoesSorrisoAtivo from "../components/MissoesSorrisoAtivo";
import PontosUsuario from "../components/PontosUsuario";

export default function SorrisoAtivo() {
  type NavigationProps = NativeStackNavigationProp<StackParamList, "Home">;
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Acumule pontos mantendo sua saúde bucal através de consultas, desafios e registro de hábitos. 
        Seus pontos podem ser trocados por prêmios e benefícios exclusivos!
      </Text>

      <PontosUsuario />

      <TouchableOpacity style={styles.exchangeButton} onPress={() => navigation.navigate("TrocarPontos")}>
        <Text style={styles.exchangeText}>Trocar Pontos {'>'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Missoes")}>
        <Text style={styles.missionTitleLink}>Missões {'>'}</Text>
      </TouchableOpacity>

      <MissoesSorrisoAtivo/>
    </ScrollView>
  );
}

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
  missionTitleLink: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF", 
    marginBottom: 10,
  }
});
