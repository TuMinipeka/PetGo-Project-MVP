import { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { registerUser } from '../../src/services/authService';
import { validateRegisterForm } from '../../src/utils/validators';

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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleRegister = async () => {
    const validationErrors = validateRegisterForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      await registerUser({
        nombre: form.nombre,
        email: form.email,
        ciudad: form.ciudad,
        telefono: form.telefono,
        password: form.password,
      });
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

      <View style={styles.field}>
        <Input
          placeholder="Nombre completo"
          value={form.nombre}
          onChangeText={set('nombre')}
          error={errors.nombre}
        />
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Correo electrónico"
          value={form.email}
          onChangeText={set('email')}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Ciudad / Municipio"
          value={form.ciudad}
          onChangeText={set('ciudad')}
          error={errors.ciudad}
        />
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Teléfono"
          value={form.telefono}
          onChangeText={set('telefono')}
          keyboardType="phone-pad"
          error={errors.telefono}
        />
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Contraseña"
          value={form.password}
          onChangeText={set('password')}
          secureTextEntry
          error={errors.password}
        />
        {!errors.password && (
          <Text style={styles.hint}>
            Mínimo 8 caracteres, una mayúscula, un número y un carácter especial.
          </Text>
        )}
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Confirmar contraseña"
          value={form.confirmPassword}
          onChangeText={set('confirmPassword')}
          secureTextEntry
          error={errors.confirmPassword}
        />
      </View>

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
  field: {
    marginBottom: 16,
  },
  hint: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
    marginLeft: 2,
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
