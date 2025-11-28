import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { router, useRouter } from 'expo-router';

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  //To load user data in storage
  useEffect(() => {
    const loadUser = async () => {
    const storedUser = await AsyncStorage.getItem("user");

    // If user isn't logged in, redirect to login page
    if (!storedUser) {
      router.push('/login');
      return;
    }

    // If logged in, display user details
    setUser(JSON.parse(storedUser));
  };

  loadUser();
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>
              Welcome, {user?.fullName || "Guest"}
            </Text>
            <View style={styles.memberBadge}>
              <Text style={styles.memberText}>Gold Member</Text>
            </View>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>TU</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchBar}>
          <Ionicons name="location-outline" size={26} color="#0EA5E9" />
          <Text style={styles.searchPlaceholder}>Where to?</Text>
          <Text style={styles.searchHint}>Search your destination</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Trips</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <TouchableOpacity style={styles.tripCard}>
          <View style={styles.tripIcon}>
            <Ionicons name="location-outline" size={26} color="#0EA5E9" />
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripTitle}>Downtown Plaza</Text>
            <Text style={styles.tripAddress}>123 Main Street</Text>
            <Text style={styles.tripTime}>2 days ago</Text>
          </View>
          <View style={styles.tripRight}>
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>Completed</Text>
            </View>
            <Text style={styles.tripPrice}>₦3500</Text>
            <Text style={styles.rating}>5.0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tripCard}>
          <View style={styles.tripIcon}>
            <Ionicons name="location-outline" size={26} color="#0EA5E9" />
          </View>
          <View style={styles.tripInfo}>
            <Text style={styles.tripTitle}>Airport Terminal</Text>
            <Text style={styles.tripAddress}>456 Airport Rd</Text>
            <Text style={styles.tripTime}>1 week ago</Text>
          </View>
          <View style={styles.tripRight}>
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>Completed</Text>
            </View>
            <Text style={styles.tripPrice}>₦5200</Text>
            <Text style={styles.rating}>4.0</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.statsTitle}>Your Stats</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Total Trips</Text>
          </View>
          <View style={[styles.statCard, styles.statCardHighlight]}>
            <Text style={[styles.statNumber, styles.statNumberHighlight]}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, styles.statNumberSaved]}>₦4200</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FFFE' },
  header: { backgroundColor: '#0EA5E9', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 32, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  welcomeText: { color: 'rgba(255,255,255,0.9)', fontSize: 15 },
  userName: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  memberBadge: { backgroundColor: 'rgba(255,255,255,0.25)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginTop: 8 },
  memberText: { color: 'white', fontSize: 13, fontWeight: '600' },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#67E8F9', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  searchBar: { backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 18, borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 8 },
  searchPlaceholder: { fontSize: 18, fontWeight: '600', color: '#1E293B', marginLeft: 12, flex: 1 },
  searchHint: { position: 'absolute', right: 20, color: '#94A3B8', fontSize: 14 },
  scrollContent: { flex: 1, paddingHorizontal: 24, marginTop: -20 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B' },
  viewAll: { color: '#0EA5E9', fontWeight: '600', fontSize: 15 },
  tripCard: { backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 20, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 10, elevation: 4 },
  tripIcon: { width: 48, height: 48, backgroundColor: '#ECFEFF', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  tripInfo: { flex: 1 },
  tripTitle: { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  tripAddress: { color: '#64748B', fontSize: 14, marginTop: 2 },
  tripTime: { color: '#94A3B8', fontSize: 13, marginTop: 6 },
  tripRight: { alignItems: 'flex-end' },
  completedBadge: { backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 8 },
  completedText: { color: '#16A34A', fontSize: 11, fontWeight: '600' },
  tripPrice: { fontSize: 18, fontWeight: 'bold', color: '#0EA5E9' },
  rating: { color: '#F59E0B', fontSize: 15, marginTop: 4 },
  statsTitle: { fontSize: 20, fontWeight: 'bold', color: '#1E293B', marginTop: 32, marginBottom: 16 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50 },
  statCard: { backgroundColor: '#ECFEFF', padding: 20, borderRadius: 20, flex: 1, marginHorizontal: 6, alignItems: 'center' },
  statCardHighlight: { backgroundColor: '#FFF7CD' },
  statNumber: { fontSize: 25, fontWeight: 'bold', color: '#0EA5E9' },
  statNumberHighlight: { color: '#D97706' },
  statNumberSaved: { color: '#16A34A' },
  statLabel: { color: '#64748B', marginTop: 4, fontSize: 14 },
  bottomNav: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 14, paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: '#E2E8F0' },
  navItem: { flex: 1, alignItems: 'center' },
  navItemActive: { flex: 1, alignItems: 'center' },
  navText: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
  navTextActive: { color: '#0EA5E9', fontSize: 12, marginTop: 4, fontWeight: '600' },
});