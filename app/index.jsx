import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import icon from '../assets/LogoPetGo.png';
import { Button } from '../components/ui/button';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.logo} />
      <Text style={styles.title}>PetGo</Text>
      <Text style={styles.text}>Respeto, amor y cuidado.</Text>

      <View style={styles.actions}>
        <Button title="Iniciar sesión" onPress={() => router.push('/login')} />
        <Pressable onPress={() => router.push('/register')}>
          {({ pressed }) => (
            <Text style={[styles.registerLink, pressed && styles.linkPressed]}>
              ¿No tienes cuenta? Regístrate
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
  text: {
    color: '#475569',
    marginBottom: 40,
  },
  actions: {
    width: '80%',
    alignItems: 'center',
    gap: 16,
  },
  registerLink: {
    color: '#F97316',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  linkPressed: {
    opacity: 0.6,
  },
});