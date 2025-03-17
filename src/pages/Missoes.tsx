import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

// Definição do tipo para uma missão
interface Mission {
  id: string;
  title: string;
  frequency: string;
  points: number;
  status: string;
  timeLeft: string;
}

// Lista de missões concluídas
const completedMissions: Mission[] = [
  {
    id: "1",
    title: "Tirar foto escovando os dentes",
    frequency: "Diária",
    points: 25,
    status: "Concluída",
    timeLeft: "Concluído",
  },
];

// Lista de missões ativas
const activeMissions: Mission[] = [
  {
    id: "2",
    title: "Consulta dentista",
    frequency: "Mensal",
    points: 500,
    status: "Não concluída",
    timeLeft: "24 dias",
  },
  {
    id: "3",
    title: "Tirar foto passando fio dental",
    frequency: "Diária",
    points: 50,
    status: "Não concluída",
    timeLeft: "13h 45m 04s",
  },
];

export default function Missoes() {
  // Função para renderizar uma missão na lista
  const renderMission = ({ item }: { item: Mission }) => (
    <View style={styles.missionCard}>
      <Text style={styles.missionTitle}>{item.title}</Text>
      <Text style={styles.missionInfo}>{item.frequency}</Text>
      <Text style={styles.missionPoints}>Recompensa: {item.points} pontos</Text>
      <Text style={styles.missionTime}>Tempo restante: {item.timeLeft}</Text>
      <Text style={styles.missionStatus}>Status: {item.status}</Text>
      {item.status === "Não concluída" && (
        <TouchableOpacity style={styles.missionButton}>
          <Text style={styles.buttonText}>Realizar Missão</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sorriso Ativo - Missões</Text>
      <Text style={styles.subHeader}>
        Realize missões para obter pontos. Seus pontos podem ser trocados por prêmios e benefícios exclusivos!
      </Text>

      <Text style={styles.sectionTitle}>Missões Concluídas</Text>
      <FlatList data={completedMissions} renderItem={renderMission} keyExtractor={(item) => item.id} />

      <Text style={styles.sectionTitle}>Missões Ativas</Text>
      <FlatList data={activeMissions} renderItem={renderMission} keyExtractor={(item) => item.id} />
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 10,
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
    color: "#333",
    marginTop: 15,
  },
  missionCard: {
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  missionInfo: {
    fontSize: 14,
    color: "#777",
  },
  missionPoints: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#28A745",
    marginVertical: 5,
  },
  missionTime: {
    fontSize: 12,
    color: "#FF4500",
  },
  missionStatus: {
    fontSize: 12,
    color: "#555",
    marginBottom: 10,
  },
  missionButton: {
    backgroundColor: "#28A745",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
