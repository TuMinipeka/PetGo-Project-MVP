// Retorna null si el valor es válido, o un string con el error si no lo es.

export function validateNombre(value) {
  const v = value.trim();
  if (!v) return 'El nombre es requerido.';
  if (v.length < 2) return 'Debe tener al menos 2 caracteres.';
  if (v.length > 60) return 'No puede superar 60 caracteres.';
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(v))
    return 'Solo puede contener letras y espacios.';
  return null;
}

export function validateEmail(value) {
  const v = value.trim();
  if (!v) return 'El correo es requerido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
    return 'Ingresa un correo válido.';
  return null;
}

export function validateCiudad(value) {
  const v = value.trim();
  if (!v) return 'La ciudad o municipio es requerida.';
  if (v.length < 2) return 'Debe tener al menos 2 caracteres.';
  if (v.length > 80) return 'No puede superar 80 caracteres.';
  return null;
}

export function validateTelefono(value) {
  const v = value.trim();
  if (!v) return 'El teléfono es requerido.';
  const digits = v.replace(/[\s\-\+\(\)]/g, '');
  if (!/^\d+$/.test(digits)) return 'Solo puede contener números.';
  if (digits.length < 7 || digits.length > 15)
    return 'Debe tener entre 7 y 15 dígitos.';
  return null;
}

export function validatePassword(value) {
  if (!value) return 'La contraseña es requerida.';
  if (value.length < 8) return 'Debe tener al menos 8 caracteres.';
  if (!/[A-Z]/.test(value)) return 'Debe incluir al menos una mayúscula.';
  if (!/[0-9]/.test(value)) return 'Debe incluir al menos un número.';
  if (!/[^a-zA-Z0-9]/.test(value)) return 'Debe incluir al menos un carácter especial.';
  return null;
}

export function validateConfirmPassword(password, confirmValue) {
  if (!confirmValue) return 'Confirma tu contraseña.';
  if (password !== confirmValue) return 'Las contraseñas no coinciden.';
  return null;
}

// Valida el formulario completo de registro.
// Retorna un objeto { campo: 'mensaje de error' } — vacío si todo es válido.
export function validateRegisterForm(form) {
  const errors = {};
  const nombre = validateNombre(form.nombre);
  const email = validateEmail(form.email);
  const ciudad = validateCiudad(form.ciudad);
  const telefono = validateTelefono(form.telefono);
  const password = validatePassword(form.password);
  const confirmPassword = validateConfirmPassword(form.password, form.confirmPassword);

  if (nombre) errors.nombre = nombre;
  if (email) errors.email = email;
  if (ciudad) errors.ciudad = ciudad;
  if (telefono) errors.telefono = telefono;
  if (password) errors.password = password;
  if (confirmPassword) errors.confirmPassword = confirmPassword;

  return errors;
}

// Valida el formulario de login (solo formato, sin reglas de fortaleza).
export function validateLoginForm({ email, password }) {
  const errors = {};
  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;
  if (!password) errors.password = 'La contraseña es requerida.';
  return errors;
}
