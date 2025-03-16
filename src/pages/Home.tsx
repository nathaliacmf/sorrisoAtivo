import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import UserCard from "../components/UserCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  type NavigationProps = NativeStackNavigationProp<StackParamList, "Home">;
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Text style={styles.logoText}>odontoprev</Text>
        </View>
        <View style={styles.headerRight}>
          <FontAwesome name="user" size={24} color="white" />
        </View>
      </View>

      <UserCard />

      <Text style={styles.sectionTitle}>Acesso rápido</Text>
      <View style={styles.quickAccessRow}>
        <TouchableOpacity style={styles.quickAccessButton}>
          <MaterialIcons name="attach-money" size={24} color="white" />
          <Text style={styles.quickAccessText}>Solicitação de Reembolso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton} onPress={() => navigation.navigate('SorrisoAtivo')}>
          <MaterialIcons name="emoji-emotions" size={24} color="white" />
          <Text style={styles.quickAccessText}>Sorriso Ativo</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newText}>Novo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton}>
          <MaterialIcons name="support-agent" size={24} color="white" />
          <Text style={styles.quickAccessText}>Fale Conosco</Text>
        </TouchableOpacity>
      </View>

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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    color: "#007AFF",
  },
  quickAccessRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  quickAccessButton: {
    backgroundColor: "#FF3B30",
    padding: 15, 
    borderRadius: 12,
    alignItems: "center",
    width: 115, 
    height: 140, 
    justifyContent: "center", 
  },
  quickAccessText: {
    color: "white",
    fontSize: 14, // Aumentando o tamanho do texto
    textAlign: "center",
    marginTop: 8,
    fontWeight: "bold",
  },
  newBadge: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  newText: {
    color: "white",
    fontSize: 10,
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