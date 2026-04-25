# PetGo

Aplicación móvil desarrollada con React Native y Expo.

---

## Requisitos previos

| Herramienta | Versión mínima | Instalación |
|---|---|---|
| Node.js | v18 o superior | [nodejs.org](https://nodejs.org/) |
| npm | Incluido con Node | — |
| Expo Go | Última disponible | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) · [iOS](https://apps.apple.com/app/expo-go/id982107779) |

> Verifica tu versión de Node con `node --version` antes de continuar.

---

## Instalación

```bash
# 1. Clona el repositorio
git clone <url-del-repositorio>
cd PetGo

# 2. Instala las dependencias
npm install

# 3. Crea tu archivo de variables de entorno
cp .env.example .env
```

Luego abre el archivo `.env` y completa las credenciales de Supabase (ver sección siguiente).

---

## Variables de entorno

Edita el archivo `.env` con las claves de tu proyecto en Supabase:

```
EXPO_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
```

Para obtener estos valores:
1. Entra a [supabase.com](https://supabase.com) → tu proyecto
2. Ve a **Project Settings** → **API**
3. Copia **Project URL** y **anon / public key**

> El prefijo `EXPO_PUBLIC_` es obligatorio para que Expo exponga la variable al cliente.  
> El archivo `.env` está en `.gitignore` — **nunca lo subas al repositorio**.

---

## Configuración de Supabase (solo primera vez)

### 1. Desactivar confirmación de email (para desarrollo)

1. Dashboard → **Authentication** → **Providers** → **Email**
2. Desactiva el toggle **"Confirm email"**
3. Guarda los cambios

> Esto permite registrarse sin necesitar acceso al correo durante el desarrollo.

### 2. Tabla `usuarios`

Asegúrate de que exista la tabla con esta estructura:

| Columna | Tipo | Notas |
|---|---|---|
| `id` | `uuid` | Primary key — mismo que `auth.users.id` |
| `nombre` | `text` | Requerido |
| `email` | `text` | — |
| `ciudad_municipio` | `text` | — |
| `telefono` | `text` | — |

---

## Ejecutar el proyecto

```bash
# Inicia el servidor de desarrollo
npm start
```

Se abrirá una terminal con un **código QR**.

---

## Probar en tu celular

**Requisito:** el celular y la computadora deben estar en la **misma red Wi-Fi**.

1. Instala **Expo Go** en tu celular
2. Corre `npm start` en la terminal
3. Escanea el código QR:
   - **Android**: desde la cámara o directamente dentro de Expo Go
   - **iOS**: desde la cámara nativa del teléfono
4. La app cargará automáticamente en tu celular

### Si no estás en la misma red (túnel)

```bash
npm start -- --tunnel
```

Esto usa `ngrok` para crear una URL pública. Útil cuando el celular está en datos móviles o en otra red.

---

## Otros comandos

```bash
# Emulador Android (requiere Android Studio)
npm run android

# Emulador iOS (solo macOS, requiere Xcode)
npm run ios

# Versión web en el navegador
npm run web

# Revisar errores de código (linter)
npm run lint
```

---

## Flujo de la app

```
Inicio (/) → Login (/login) → App principal
              ↓
         Registro (/register)
              ↓
    Recuperar contraseña (/forgot-password)
```

---

## Estructura del proyecto

```
PetGo/
├── app/                        # Pantallas y navegación (expo-router)
│   ├── _layout.jsx             # Layout raíz
│   ├── index.jsx               # Pantalla de inicio "/"
│   └── (auth)/                 # Grupo de autenticación
│       ├── login.jsx           # Inicio de sesión
│       ├── register.jsx        # Registro de usuario
│       ├── forgot-password.jsx # Recuperación de contraseña
│       └── select-role.jsx     # Selección de rol
│
├── components/ui/              # Componentes reutilizables
│   ├── button.jsx
│   └── input.jsx
│
├── src/
│   ├── config/supabase.js      # Cliente de Supabase (lee del .env)
│   ├── context/AuthContext.jsx # Estado global de autenticación
│   └── services/authService.js # Funciones: login, register
│
├── assets/                     # Imágenes e íconos
├── .env                        # Credenciales locales — NO subir a git
├── .env.example                # Plantilla de variables de entorno
└── app.json                    # Configuración de Expo
```

---

## Ramas de Git — flujo de trabajo en equipo

`main` es la rama de **producción**. Solo recibe código estable y revisado. **Nunca trabajes directamente en `main`.**

### Convención de nombres de ramas

```
feature/nombre-de-la-funcionalidad   # Nueva funcionalidad
fix/descripcion-del-bug              # Corrección de errores
chore/tarea-de-mantenimiento         # Cambios de configuración, refactors
```

### Flujo para cada desarrollador

```bash
# 1. Actualiza main
git checkout main
git pull origin main

# 2. Crea tu rama
git checkout -b feature/mi-funcionalidad

# 3. Haz commits descriptivos
git add .
git commit -m "feat: agrego pantalla de login"

# 4. Sube tu rama
git push origin feature/mi-funcionalidad

# 5. Abre un Pull Request hacia main en GitHub y espera revisión
```

### Reglas

- `main` solo recibe cambios via **Pull Request** revisado por al menos un compañero
- Los mensajes de commit usan prefijos: `feat:`, `fix:`, `chore:`, `docs:`
- Nunca subas el archivo `.env` al repositorio

---

## Solución de problemas comunes

| Error | Causa | Solución |
|---|---|---|
| `Network request failed` | Celular y PC en redes distintas | Usa `npm start -- --tunnel` |
| `email rate limit exceeded` | Límite de emails en Supabase free | Desactiva "Confirm email" en Supabase |
| `supabaseUrl is required` | Falta el archivo `.env` | Crea el `.env` desde `.env.example` |
| QR no escanea | Firewall o red corporativa | Usa `--tunnel` o prueba en emulador |
