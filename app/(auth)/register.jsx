import { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BackButton } from '../../components/ui/BackButton';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { registerUser } from '../../src/services/authService';
import {
  validateRegisterForm,
  validateNombre,
  validateEmail,
  validateCiudad,
  validateTelefono,
  validatePassword,
  validateConfirmPassword,
} from '../../src/utils/validators';
import { styles } from './styles/register';

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

  const validate = (field, value, currentForm) => {
    switch (field) {
      case 'nombre':         return validateNombre(value);
      case 'email':          return validateEmail(value);
      case 'ciudad':         return validateCiudad(value);
      case 'telefono':       return validateTelefono(value);
      case 'password':       return validatePassword(value);
      case 'confirmPassword':
        return validateConfirmPassword(currentForm.password, value);
      default: return null;
    }
  };

  const set = (field) => (value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      const err = validate(field, value, next);
      setErrors((e) => ({ ...e, [field]: err }));
      return next;
    });
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
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para registrarte</Text>
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Nombre"
          value={form.nombre}
          onChangeText={set('nombre')}
          maxLength={16}
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
        {!errors.email && (
          <Text style={styles.hint}>Solo se aceptan @gmail.com o @hotmail.com.</Text>
        )}
      </View>

      <View style={styles.field}>
        <Input
          placeholder="Ciudad / Municipio"
          value={form.ciudad}
          onChangeText={set('ciudad')}
          maxLength={16}
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
          showToggle
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
          showToggle
          error={errors.confirmPassword}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#e07a5f" style={styles.loader} />
      ) : (
        <Button title="Registrarme" onPress={handleRegister} style={styles.button} />
      )}

      <Pressable onPress={() => router.push('/login')}>
        {({ pressed }) => (
          <Text style={[styles.loginLink, pressed && styles.linkPressed]}>
            ¿Ya tienes cuenta? Inicia sesión
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}
