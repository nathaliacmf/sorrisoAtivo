import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const RealizarMissao = () => {
  const [image, setImage] = useState<string | null>(null); // Definir que pode ser string ou null

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.takePhotoText}>Tirar Foto</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Foto</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1976D2",
    padding: 15,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },
  takePhotoText: {
    color: "#1976D2",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  placeholderText: {
    color: "#aaa",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RealizarMissao;
