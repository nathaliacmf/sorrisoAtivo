import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserCard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Olá, Fulano Ciclano</Text>
        <Text style={styles.protocol}>Protocolo de atendimento: 000000000000000</Text>
      </View>

      {/* Carteirinha Digital */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Carteirinha digital</Text>
        <View style={styles.card}>
          <Text style={styles.cardTextBold}>Fulano Ciclano</Text>
          <Text style={styles.cardText}>Empresa</Text>
          <View style={styles.separator} />
          <Text style={styles.cardTextBold}>Plano Básico III</Text>
          <Text style={styles.cardText}>Número: 000000000000</Text>
          <Text style={styles.cardText}>CNS: 000000000000000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
  header: {
    padding: 15,
    backgroundColor: "#007AFF",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  protocol: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  cardContainer: {
    margin: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 15,
  },
  cardTextBold: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    color: "white",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
    opacity: 0.5,
  },
});
