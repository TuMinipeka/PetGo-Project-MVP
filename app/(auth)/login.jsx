import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, Text, View } from 'react-native';
import { BackButton } from '../../components/ui/BackButton';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { loginUser } from '../../src/services/authService';
import { validateLoginForm } from '../../src/utils/validators';
import { styles } from './styles/login';

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
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>
      </View>

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
          showToggle
          error={errors.password}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#e07a5f" style={styles.button} />
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
