import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const stored = await AsyncStorage.getItem("user");
      if (!stored) {
        router.push("/login");
        return;
      }
      setUser(JSON.parse(stored));
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/login");
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.fullName?.split(" ").map(n => n[0]).join("") || "U"}
          </Text>
        </View>

        <Text style={styles.name}>{user?.fullName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.phone}>{user?.phone}</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Rides</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4.8★</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: "#00C38A" }]}>₦4200</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>
      </View>

      {/* Menu */}
      <MenuItem label="Edit Profile" />
      <MenuItem label="Notifications" />
      <MenuItem label="Payment Methods" />
      <MenuItem label="Saved Places" />
      <MenuItem label="Help & Support" />
      <MenuItem
        label="Settings"
        onPress={() => router.push("/settings")}
      />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>⟲ Log Out</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

function MenuItem({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuLabel}>{label}</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FA",
  },

  header: {
    backgroundColor: "#2CC6FF",
    paddingVertical: 40,
    paddingBottom: 60,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffffff33",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarText: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
  },

  name: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
  },

  email: {
    color: "#fff",
    opacity: 0.9,
  },

  phone: {
    color: "#fff",
    marginTop: 5,
  },

  statsRow: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    width: "80%",
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  statLabel: {
    color: "#fff",
    opacity: 0.8,
    fontSize: 13,
  },

  menuItem: {
    backgroundColor: "#FFF",
    padding: 18,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  menuLabel: {
    fontSize: 16,
    color: "#333",
  },

  menuArrow: {
    fontSize: 20,
    color: "#999",
  },

  logoutBtn: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
  },

  logoutText: {
    color: "red",
    fontSize: 16,
  },
});
