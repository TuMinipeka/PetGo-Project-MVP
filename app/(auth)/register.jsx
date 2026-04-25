import { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { registerUser } from '../../src/services/authService';

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    ciudad: '',
    telefono: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const set = (field) => (value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleRegister = async () => {
    const { nombre, email, ciudad, telefono, password, confirmPassword } = form;

    if (!nombre || !email || !ciudad || !telefono || !password || !confirmPassword) {
      Alert.alert('Campos incompletos', 'Por favor completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      setLoading(true);
      await registerUser({ nombre, email, ciudad, telefono, password });
      Alert.alert(
        'Registro exitoso',
        'Tu cuenta fue creada. Ya puedes iniciar sesión.',
        [{ text: 'Ir al login', onPress: () => router.push('/login') }]
      );
    } catch (error) {
      Alert.alert('Error al registrarse', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.subtitle}>Ingresa tus datos para registrarte</Text>

      <Input
        placeholder="Nombre completo"
        value={form.nombre}
        onChangeText={set('nombre')}
        style={styles.input}
      />
      <Input
        placeholder="Correo electrónico"
        value={form.email}
        onChangeText={set('email')}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <Input
        placeholder="Ciudad / Municipio"
        value={form.ciudad}
        onChangeText={set('ciudad')}
        style={styles.input}
      />
      <Input
        placeholder="Teléfono"
        value={form.telefono}
        onChangeText={set('telefono')}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Input
        placeholder="Contraseña"
        value={form.password}
        onChangeText={set('password')}
        secureTextEntry
        style={styles.input}
      />
      <Input
        placeholder="Confirmar contraseña"
        value={form.confirmPassword}
        onChangeText={set('confirmPassword')}
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0a7ea4" style={styles.loader} />
      ) : (
        <Button title="Registrarme" onPress={handleRegister} style={styles.button} />
      )}

      <Text style={styles.loginLink} onPress={() => router.push('/login')}>
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
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
  loader: {
    marginTop: 16,
  },
  loginLink: {
    marginTop: 24,
    color: '#0a7ea4',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
