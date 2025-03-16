import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserCard() {
  return (
    <View>
      {/* Nome do Usuário */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Olá, Fulano Ciclano</Text>
        <Text style={styles.protocol}>Protocolo de atendimento: 000000000000000</Text>
      </View>

      {/* Carteirinha Digital */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Carteirinha digital</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardUser}>Fulano Ciclano</Text>
          <Text style={styles.cardCompany}>Empresa</Text>
          <Text style={styles.cardPlan}>Plano Básico III</Text>
          <Text style={styles.cardDetails}>Número: 000000000000</Text>
          <Text style={styles.cardDetails}>CNS: 000000000000000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    padding: 15,
    backgroundColor: "#007AFF",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#007AFF",
    color: 'white',
  },
  protocol: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: "white",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007AFF",
  },
  cardContent: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
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
  cardPlan: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  cardDetails: {
    color: "white",
    fontSize: 14,
    marginTop: 2,
  },
});
