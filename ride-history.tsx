import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RideHistory() {
  const rides = [
    { date: "Today, 2:30 PM", price: "₦32,000", from: "Downtown Plaza", to: "Airport Terminal", stars: 5 },
    { date: "Yesterday, 8:45 AM", price: "₦12,500", from: "Home", to: "Office", stars: 5 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride History</Text>
      <Text style={styles.subtitle}>View all your past trips</Text>

      {rides.map((ride, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.date}>{ride.date}</Text>
            <Text style={styles.price}>{ride.price}</Text>
          </View>

          <Text style={styles.label}>From</Text>
          <Text style={styles.place}>{ride.from}</Text>

          <Text style={styles.label}>To</Text>
          <Text style={styles.place}>{ride.to}</Text>

          <Text style={styles.status}>Completed</Text>
          <Text style={styles.stars}>{"★".repeat(ride.stars)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#F3F4F6",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },

  subtitle: {
    color: "#707070",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  date: {
    color: "#444",
    fontWeight: "600",
  },

  price: {
    fontWeight: "700",
    fontSize: 16,
  },

  label: {
    color: "#999",
    marginTop: 5,
    fontSize: 12,
  },

  place: {
    fontSize: 15,
    color: "#333",
  },

  status: {
    color: "#00C38A",
    marginTop: 10,
    fontWeight: "600",
  },

  stars: {
    marginTop: 8,
    color: "#FBBF24",
    fontSize: 16,
  },
});
