# efemerIA

Una aplicación moderna que utiliza inteligencia artificial para descubrir efemérides fascinantes relacionadas con tu fecha de nacimiento y nombre.

## 🚀 Características

- **UI Moderna**: Diseño minimalista con tema oscuro y efectos visuales atractivos
- **IA Integrada**: Utiliza Deepseek a través de OpenRouter para generar efemérides personalizadas
- **Responsive**: Funciona perfectamente en dispositivos móviles y desktop
- **Docker Ready**: Configuración completa para desarrollo y producción

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **IA**: Deepseek Chat v3 (gratuito) a través de OpenRouter
- **Containerización**: Docker & Docker Compose

## 📦 Instalación

### Prerrequisitos

- Docker y Docker Compose instalados
- API key de OpenRouter

### Configuración

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd efemeria
   ```

2. **Configura las variables de entorno**
   ```bash
   cp env.example .env
   ```
   
   Edita `.env` y agrega tu API key de OpenRouter:
   ```
   OPENROUTER_API_KEY=tu_api_key_aqui
   ```

## 🚀 Desarrollo y Producción

### Iniciar la aplicación
```bash
docker-compose up --build -d
```

La aplicación estará disponible en `http://localhost:3003`

### Comandos útiles

```bash
# Construir la imagen
docker-compose build

# Ejecutar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Verificar estado de salud
docker-compose ps

# Detener
docker-compose down
```

### Health Check
La aplicación incluye un health check automático que verifica:
- Disponibilidad del servidor web
- Funcionamiento del modelo de IA
- Configuración correcta de la API key

El health check se ejecuta cada 30 segundos y está disponible en:
`http://localhost:3003/api/healthq4tHyrFrwQqfRbAQ`

## 📱 Uso

1. Abre la aplicación en tu navegador
2. Ingresa tu nombre
3. Selecciona el día y mes de tu fecha de nacimiento
4. Elige el modelo de IA que prefieras
5. Haz clic en "Descubrir mi efeméride"
6. ¡Disfruta de tu efeméride personalizada!

## 🎨 Características de la UI

- **Tema Oscuro**: Fondo negro con acentos en púrpura y azul
- **Efectos Glassmorphism**: Elementos con efecto de cristal esmerilado
- **Animaciones**: Transiciones suaves y efectos flotantes
- **Responsive**: Adaptable a todos los tamaños de pantalla
- **Accesibilidad**: Diseño accesible con contraste adecuado

## 🔧 Estructura del Proyecto

```
efemeria/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── efemerides/route.ts           # API endpoint principal
│   │   │   └── healthq4tHyrFrwQqfRbAQ/route.ts # Health check
│   │   ├── globals.css                        # Estilos globales
│   │   ├── layout.tsx                         # Layout principal
│   │   └── page.tsx                           # Página principal
│   └── components/
│       ├── Header.tsx                         # Encabezado
│       ├── EfemeridesForm.tsx                 # Formulario
│       └── EfemeridesResult.tsx               # Resultado
├── Dockerfile                                # Configuración Docker
├── docker-compose.yml                        # Configuración para producción
├── env.example                               # Variables de entorno de ejemplo
└── README.md                                 # Documentación completa
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [OpenRouter](https://openrouter.ai/) por proporcionar acceso a modelos de IA
- [Deepseek](https://www.deepseek.com/) por el modelo de IA utilizado
- [Next.js](https://nextjs.org/) por el framework web
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
