# ToskanGPT

Este proyecto es un frontend de una aplicación de Chat que replica la antigua interfaz de [ChatGPT](https://chatgpt.com/), construido con **Next.js**. Este proyecto lo he hecho para aprender a utilizar el framework y hacer cosas nuevas.

## Características

-   **Next.js**: Un framework React con renderizado del lado del servidor (SSR) y generación estática.
-   **Extensible**: Fácil de conectar a un backend o API para obtener respuestas en tiempo real o conectar con sistemas de chat. (Actualmente se utilizan 2 archivos .json para simular los chats)
-   **Listo para producción**: Incluye configuración básica para desplegarse en un entorno de producción.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

-   **Node.js** (versión v18.17.0 o superior)
-   **npm** (versión v9.6.7 o superior)

Puedes descargar Node.js desde [nodejs.org](https://nodejs.org/).

## Instalación

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Toskan4134/ToskanGPT.git
```

Accede a la carpeta del proyecto

```bash
cd ToskanGPT
```

Instala las dependencias necesarias

```bash
npm install
```

## Comandos Disponibles

### Desarrollo

Para iniciar el servidor en modo de desarrollo (con recarga automática al cambiar el código):

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000, a menos que se especifique un puerto diferente.

### Producción

Para compilar y ejecutar el proyecto en modo producción:

```bash
npm run build
npm start
```

Esto compilará la aplicación y luego la ejecutará en http://localhost:3000, a menos que se configure un puerto diferente.

### Otros Comandos

-   `npm run lint`: Revisa el código en busca de problemas de formato o errores de sintaxis.

### Configuración

La aplicación está configurada para ejecutarse en el puerto `3000` por defecto. Si deseas cambiar el puerto, puedes hacerlo cambiando el comando de iniciar la aplicación añadiendo `-p` junto a un puerto a esta:

```json
"start": "next start -p 4000"
```

## Implementar Backend

El backend tiene que tener el formato de [testChats.json](./app/test/testChats.json) para los **chats** (lo que aparece en el sidebar) y el formato de [testConversations.json](./app/test/testConversations.json) para las **conversaciones** (La conversación de cada chat)

Los archivos a editar para añadir el backend serían [sideMenu.jsx](./app/components/sideMenu.jsx) en el caso de los **chats** y [chatHistory.jsx](./app/components/chatHistory.jsx) en el caso de las **conversaciones**

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (_git checkout -b feature/nueva-caracteristica_).
3. Realiza tus cambios y haz commits (_git commit -m 'Agregué una nueva característica'_).
4. Envía tu rama (_git push origin feature/nueva-caracteristica_).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE)
para obtener más detalles.

¡Gracias por utilizar el proyecto ToskanGPT! Si tienes algún problema o sugerencia, no dudes en abrir un issue.
