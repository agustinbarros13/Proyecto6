# Proyecto de API con Express y MongoDB

## Descripción

Este proyecto es una API restful que fue realizada con Express y MongoDB. Permite realizar operaciones CRUD en dos colecciones: `Character` y `Movie`.

## Endpoints

### Characters

- `GET /characters`: Obtiene todos los personajes.
- `POST /characters`: Crea un nuevo personaje.
- `GET /characters/:id`: Obtiene un personaje por ID.
- `PUT /characters/:id`: Actualiza un personaje por ID.
- `DELETE /characters/:id`: Elimina un personaje por ID.

### Movies

- `GET /movies`: Obtiene todas las películas.
- `POST /movies`: Crea una nueva película.
- `GET /movies/:id`: Obtiene una película por ID.
- `PUT /movies/:id`: Actualiza una película por ID.
- `DELETE /movies/:id`: Elimina una película por ID.

## Instrucciones

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` en la raíz del proyecto con las
