import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Integrar la lógica de autenticación con Supabase o servicio.
    console.log('Iniciar sesión con', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Ingresar" onPress={handleLogin} style={styles.button} />

      <Text style={styles.linkText} onPress={() => router.push('/forgot-password')}>
        Olvidé mi contraseña
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes cuenta?</Text>
        <Text style={styles.footerLink} onPress={() => router.push('/register')}>
          Regístrate
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#0a7ea4',
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  linkText: {
    marginTop: 18,
    color: '#0a7ea4',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  footerText: {
    color: '#64748b',
  },
  footerLink: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
});
