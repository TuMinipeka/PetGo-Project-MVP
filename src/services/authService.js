import { supabase } from '../config/supabase';

export async function registerUser({ nombre, email, ciudad, telefono, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // Con confirmación de email desactivada, data.user llega inmediatamente.
  // Con confirmación activa, data.session es null pero data.user sí tiene el id.
  const userId = data.user?.id;
  if (!userId) throw new Error('No se pudo obtener el usuario registrado.');

  const { error: insertError } = await supabase.from('usuarios').insert({
    id: userId,
    nombre,
    email,
    ciudad_municipio: ciudad,
    telefono,
  });
  if (insertError) throw insertError;

  return data;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}
