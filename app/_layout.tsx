import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="auth" />
      </Stack>
    </PaperProvider>
  );
}
