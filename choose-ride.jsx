import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const rideOptions = [
  {
    id: 1,
    icon: "bicycle-outline",
    type: "E-Bike",
    time: "2 min",
    seats: 1,
    price: "$5.50",
  },
  {
    id: 2,
    icon: "car-outline",
    type: "E-Car",
    time: "5 min",
    seats: 4,
    price: "$12.00",
  },
  {
    id: 3,
    icon: "people-outline",
    type: "E-Van",
    time: "8 min",
    seats: 6,
    price: "$18.50",
  },
];

export default function ChooseRide() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Choose a ride</Text>

      <View style={styles.timeRow}>
        <Ionicons name="time-outline" size={16} color="#888" />
        <Text style={styles.timeText}>Estimated pickup time</Text>
      </View>

      {rideOptions.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={28} color="#fff" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.rideType}>{item.type}</Text>

            <View style={styles.metaRow}>
              <MaterialIcons name="schedule" size={16} color="#777" />
              <Text style={styles.metaText}>{item.time}</Text>

              <Ionicons
                name="person-outline"
                size={16}
                color="#777"
                style={{ marginLeft: 10 }}
              />
              <Text style={styles.metaText}>{item.seats} seats</Text>
            </View>
          </View>

          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Prices may vary based on traffic and demand
        </Text>
      </View>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>Back to Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f6f7f9", flex: 1 },
  header: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  timeRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  timeText: { marginLeft: 5, color: "#777" },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: "#14b8ff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  rideType: { fontSize: 16, fontWeight: "600" },

  metaRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  metaText: { marginLeft: 4, color: "#777" },

  price: { fontSize: 10, fontWeight: "700", color: "#000" },

  notice: {
    padding: 15,
    backgroundColor: "#eef1f5",
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  noticeText: { textAlign: "center", color: "#777" },

  backButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  backText: { fontWeight: "600", color: "#444" },
});
