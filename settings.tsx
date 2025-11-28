// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen</Text>
//     </View>
//   );
// }
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [location, setLocation] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.subHeader}>Manage your app preferences</Text>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Push Notifications</Text>
          <Switch value={pushNotifications} onValueChange={setPushNotifications} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sound Effects</Text>
          <Switch value={soundEffects} onValueChange={setSoundEffects} />
        </View>
      </View>

      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy & Security</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Two-Factor Auth</Text>
          <Switch value={twoFactor} onValueChange={setTwoFactor} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location Services</Text>
          <Switch value={location} onValueChange={setLocation} />
        </View>
      </View>

      <Text style={styles.footer}>App Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    color: "gray",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
  },
  footer: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
    marginBottom: 40,
  },
});