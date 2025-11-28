import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MapScreen() {
    const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.mapHeader}>
        <Ionicons name="location-outline" size={45} color="#0aa7ff" />
        <Text style={styles.mapText}>Map View</Text>
      </View>

      {/* Form */}
      <View style={styles.formCard}>
        <TextInput placeholder="Pickup location" style={styles.input} />
        <TextInput placeholder="Drop-off location" style={styles.input} />

        <View style={styles.bottomRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="time-outline" size={18} color="#777" />
            <Text style={{ marginLeft: 5, color: "#333" }}>Now</Text>
          </View>

          <Text style={styles.scheduleText}>Schedule</Text>
        </View>
      </View>

      {/* Saved Places */}
      <Text style={styles.savedTitle}>Saved Places</Text>

      <TouchableOpacity style={styles.savedCard}>
        <Ionicons name="home-outline" size={30} color="#14b8ff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.placeName}>Home</Text>
          <Text style={styles.placeAddress}>789 Oak Avenue</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.savedCard}>
        <Ionicons name="briefcase-outline" size={30} color="#14b8ff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.placeName}>Work</Text>
          <Text style={styles.placeAddress}>321 Business Park</Text>
        </View>
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity 
        style={styles.findButton}
        onPress={() => router.push('/choose-ride')}
      >
        <Text style={styles.findText}>Find a Ride</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f7fa"
  },

  mapHeader: {
    alignItems: "center",
    marginBottom: 20,
  },

  mapText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 5,
  },

  formCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#f2f4f7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  scheduleText: {
    color: "#0aa7ff",
    fontWeight: "600",
  },

  savedTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  savedCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12,
  },

  placeName: {
    fontSize: 16,
    fontWeight: "600",
  },

  placeAddress: {
    color: "#666",
  },

  findButton: {
    backgroundColor: "#00b4ff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  findText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
