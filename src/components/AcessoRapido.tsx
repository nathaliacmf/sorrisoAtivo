import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/stack.routes";

export default function AcessoRapido() {
  type NavigationProps = NativeStackNavigationProp<StackParamList, "Home">;
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text style={styles.sectionTitle}>Acesso rápido</Text>
      <View style={styles.quickAccessRow}>
        <TouchableOpacity style={styles.quickAccessButton}>
          <MaterialIcons name="attach-money" size={24} color="white" />
          <Text style={styles.quickAccessText}>Solicitação de Reembolso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAccessButton} onPress={() => navigation.navigate("SorrisoAtivo")}>
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
    fontSize: 14,
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
});
