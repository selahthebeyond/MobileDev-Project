import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <InnerLayout />
    </SafeAreaProvider>
  );
}

function InnerLayout() {
  const insets = useSafeAreaInsets();
  const extraTop = 12; // to adjust spacing at the top
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top + extraTop }}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </SafeAreaView>
  );
}
