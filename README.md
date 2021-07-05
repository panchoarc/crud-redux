# Aplicación CRUD utilizando REDUX y Bootstrap

## [Live Demo](https://crud-products-redux-app.netlify.app/)

## Tecnologías Utilizadas

- [Redux](https://es.redux.js.org/)

Redux es una librería que nos permite manejar el estado de forma predecible mediante el uso de actions, reducers y dispatchers

- [Create React App](https://create-react-app.dev/docs/getting-started/)

Herramienta oficial para la creación de SPA (Single Page Applications) utilizando react para la construcción rápida sin configuración.

- [Axios](https://github.com/axios/axios)

Cliente HTTP basado en promesas

- [Json-server](https://www.npmjs.com/package/json-server)

Creación de full fake REST API para realizar pruebas o mocking.

## Scripts Disponibles

### `npm start` o `yarn start`

Nos permite iniciar la aplicación en modo desarrollo, además de iniciar el servidor json-server

### `npm run api`

Nos permite levantar la instancia de json-server

### `npm run build`

Nos permite crear el bundle de producción. Este bundle se localiza en **build**

## Docker

Si desea construir la aplicación en un contenedor de Docker, utilice la siguiente sintaxis:

***Para su construcción:***

```docker
docker build -t NombreAplicación .
```

***Para su despliegue:***

```docker
docker run -dp puertocontenedor:puertomaquina --name NombreContenedor NombreAplicación
```
