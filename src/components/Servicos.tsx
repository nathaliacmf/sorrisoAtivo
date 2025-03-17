import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Servicos() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Serviços</Text>
      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceButton}>
          <Ionicons name="search" size={24} color="#007AFF" />
          <Text style={styles.serviceText}>Buscar dentistas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Ionicons name="calendar" size={24} color="#007AFF" />
          <Text style={styles.serviceText}>Agendar consulta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Ionicons name="medkit" size={24} color="#007AFF" />
          <Text style={styles.serviceText}>Planos de Saúde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Ionicons name="document-text" size={24} color="#007AFF" />
          <Text style={styles.serviceText}>Histórico de Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Ionicons name="chatbubbles" size={24} color="#007AFF" />
          <Text style={styles.serviceText}>Atendimento Online</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    color: "#007AFF",
  },
  servicesContainer: {
    margin: 15,
  },
  serviceButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  serviceText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
