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
          <Text style={styles.cardUser}>Fulano Ciclano</Text>
          <Text style={styles.cardCompany}>Empresa</Text>
          <View style={styles.separator} />
          <Text style={styles.cardPlan}>Plano Básico III</Text>
          <Text style={styles.cardDetails}>Número: 000000000000</Text>
          <Text style={styles.cardDetails}>CNS: 000000000000000</Text>
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
  cardUser: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardCompany: {
    color: "white",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
    opacity: 0.5,
  },
  cardPlan: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDetails: {
    color: "white",
    fontSize: 14,
    marginTop: 2,
  },
});
