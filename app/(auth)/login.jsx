import { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { loginUser } from '../../src/services/authService';
import { validateLoginForm } from '../../src/utils/validators';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
  };

  const handleLogin = async () => {
    const validationErrors = validateLoginForm({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      await loginUser({ email, password });
      router.replace('/');
    } catch (error) {
      Alert.alert('Error al iniciar sesión', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

      <View style={styles.field}>
        <Input
          placeholder="Correo electrónico"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
          error={errors.password}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0a7ea4" style={styles.button} />
      ) : (
        <Button title="Ingresar" onPress={handleLogin} style={styles.button} />
      )}

      <Pressable onPress={() => router.push('/forgot-password')}>
        {({ pressed }) => (
          <Text style={[styles.linkText, pressed && styles.linkPressed]}>
            Olvidé mi contraseña
          </Text>
        )}
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿No tienes cuenta?</Text>
        <Pressable onPress={() => router.push('/register')}>
          {({ pressed }) => (
            <Text style={[styles.footerLink, pressed && styles.linkPressed]}>
              Regístrate
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
  field: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  linkText: {
    marginTop: 18,
    color: '#F97316',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '600',
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
    color: '#F97316',
    fontWeight: '700',
  },
  linkPressed: {
    opacity: 0.55,
  },
});
