import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email.trim()) {
      Alert.alert('Correo requerido', 'Por favor ingresa tu correo electrónico.');
      return;
    }

    setSent(true);
    Alert.alert(
      'Correo enviado',
      'Si el correo existe en nuestra base, recibirás instrucciones para restablecer tu contraseña.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>
      <Text style={styles.subtitle}>
        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
      </Text>

      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Button
        title={sent ? 'Reenviar enlace' : 'Enviar enlace'}
        onPress={handleSend}
        style={styles.button}
      />

      <Text style={styles.message}>
        {sent
          ? 'Revisa tu bandeja de entrada y spam. El enlace puede tardar unos minutos.'
          : 'Recibirás un correo con instrucciones para restablecer tu contraseña.'}
      </Text>

      <Text style={styles.backLink} onPress={() => router.push('/login')}>
        Volver al login
      </Text>
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
    lineHeight: 22,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  message: {
    marginTop: 20,
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
  },
  backLink: {
    marginTop: 24,
    color: '#0a7ea4',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
