# API Copa Libertadores 🏆

API REST desarrollada con Node.js y Express para consultar información de clubes de la Copa Libertadores, sus países y los años en que obtuvieron títulos.

Proyecto correspondiente a la Evaluación 1 del Módulo 3: Backend y APIs REST.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- CORS
- Yarn

## Instalación y ejecución

Se requiere Node.js 20 o superior y Yarn.

Clonar el repositorio:

```bash
git clone https://github.com/eduardrilo/api_copa_libertadores.git
cd api_copa_libertadores
```

Instalar las dependencias:

```bash
yarn
```

Iniciar el servidor:

```bash
yarn dev
```

La API estará disponible en `http://localhost:3000`.

El servidor utiliza `node --watch` para reiniciarse automáticamente al guardar cambios.

## Endpoints disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/clubes` | Obtener todos los clubes |
| GET | `/api/clubes/:id` | Buscar un club por su ID |
| GET | `/api/clubes?pais=Chile` | Filtrar clubes por país |
| GET | `/api/titulos/:club` | Consultar los años de los títulos de un club |

## Manejo de respuestas

La API utiliza los códigos HTTP:

- **200 OK:** consulta realizada correctamente.
- **404 Not Found:** el país o club solicitado no existe.

Los errores se devuelven en formato JSON. Los clubes que existen, pero no tienen títulos, devuelven un array vacío `[]` con estado HTTP 200.

## Datos

Los datos se encuentran en `datos.js` e incluyen 16 clubes pertenecientes a 5 países: Argentina, Brasil, Chile, Uruguay y Paraguay.

## Video demostrativo

Pendiente de incorporar el enlace al video de demostración y explicación de la API.