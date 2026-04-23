# PetGo

Aplicación móvil desarrollada con React Native y Expo.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Expo Go](https://expo.dev/client) instalado en tu teléfono (para probar en dispositivo físico)
- Cuenta en [Supabase](https://supabase.com/) (para el backend)

---

## Instalación

```bash
# 1. Clona el repositorio
git clone <url-del-repositorio>
cd PetGo

# 2. Instala las dependencias
npm install
```

---

## Comandos para ejecutar

```bash
# Inicia el servidor de desarrollo (abre un QR para escanear con Expo Go)
npm start

# Ejecuta en emulador Android
npm run android

# Ejecuta en el navegador web
npm run web

# Revisa errores de código (linter)
npm run lint
```

---

## Estructura del proyecto

```
PetGo/
├── app/                        # Pantallas y navegación (expo-router)
│   ├── _layout.jsx             # Layout raíz: envuelve toda la app
│   ├── index.jsx               # Pantalla de inicio (ruta "/")
│   └── (auth)/                 # Grupo de pantallas de autenticación
│       ├── _layout.jsx         # Layout del grupo auth
│       ├── login.jsx           # Pantalla de inicio de sesión
│       ├── register.jsx        # Pantalla de registro
│       ├── forgot-password.jsx # Pantalla de recuperación de contraseña
│       └── select-role.jsx     # Pantalla de selección de rol
│
├── components/                 # Componentes reutilizables de UI
│   └── ui/
│       ├── button.jsx          # Botón personalizado de la app
│       └── input.jsx           # Campo de texto personalizado
│
├── src/                        # Lógica de negocio
│   ├── config/
│   │   └── supabase.js         # Configuración y cliente de Supabase
│   ├── context/
│   │   └── AuthContext.jsx     # Contexto global: maneja si el usuario está logueado
│   └── services/
│       └── authService.js      # Funciones de autenticación: login, register, logout
│
├── assets/                     # Imágenes e íconos estáticos de la app
├── .env                        # Variables de entorno (claves de Supabase, etc.) — NO subir a git
├── app.json                    # Configuración de la app (nombre, ícono, splash, etc.)
├── package.json                # Dependencias y scripts del proyecto
├── App.js                      # Punto de entrada del template (no se usa con expo-router)
└── index.js                    # Registro raíz de la app (no se usa con expo-router)
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes claves:

```
EXPO_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
```

> El prefijo `EXPO_PUBLIC_` es obligatorio para que Expo exponga la variable al cliente.

---

## Flujo de datos

```
Pantalla (app/) → Componentes (components/) → Servicios (src/services/) → Supabase (src/config/) → Contexto global (src/context/)
```

---

## Ramas de Git — flujo de trabajo en equipo

`main` es la rama de **producción**. Solo recibe código estable y revisado. **Nunca trabajes directamente en `main`.**

### Convención de nombres de ramas

```
feature/nombre-de-la-funcionalidad   # Nueva funcionalidad
fix/descripcion-del-bug              # Corrección de errores
chore/tarea-de-mantenimiento         # Cambios de configuración, refactors, etc.
```

### Flujo de trabajo para cada desarrollador

```bash
# 1. Asegúrate de tener main actualizado
git checkout main
git pull origin main

# 2. Crea tu rama a partir de main
git checkout -b feature/mi-funcionalidad

# 3. Trabaja, haz commits con mensajes claros
git add .
git commit -m "feat: agrego pantalla de login"

# 4. Sube tu rama al repositorio
git push origin feature/mi-funcionalidad

# 5. Abre un Pull Request hacia main en GitHub
# 6. Espera revisión antes de hacer merge
```

### Reglas

- `main` → solo producción, nunca se toca directamente
- Cada desarrollador trabaja en su propia rama
- Todo cambio entra a `main` a través de un **Pull Request** revisado por al menos un compañero
- Los mensajes de commit deben ser descriptivos (`feat:`, `fix:`, `chore:`, `docs:`)
