import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { BackButton } from '../../components/ui/BackButton';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { styles } from './styles/forgot-password';

export default function ForgotPasswordScreen() {
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
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.title}>Recuperar contraseña</Text>
        <Text style={styles.subtitle}>
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
        </Text>
      </View>

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
    </View>
  );
}
