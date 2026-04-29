import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-Bold': Poppins_700Bold,
    'Fraunces-Bold': Fraunces_700Bold,
  });

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
