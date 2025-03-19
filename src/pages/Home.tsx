import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import UserCard from "../components/UserCard";
import AcessoRapido from "../components/AcessoRapido";
import Servicos from "../components/Servicos";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Text style={styles.logoText}>odontoprev</Text>
        </View>
        <View style={styles.headerContent}>
          <FontAwesome name="user" size={24} color="white" />
        </View>
      </View>

      <UserCard />
      <AcessoRapido />
      <Servicos />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 15,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
