Este proyecto esta creado con create-react-app, realizaremos un gestor de cursos con un mock API (JSON server).

## Stack de la app:

- flux: libreria para el manejo del estado
- react-router: libreria para manejar el routing en una SPA
- bootstrap: para estilizar la app

## Mock API:

npm install -D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0

- cross-env: libreria para setear env variables
- npm-run-all: nos permite correr varios scripts al mismo tiempo
- json-server: sirve nuestra mock data

## Pasos:

1. Creamos la DB en memoria usando JSON server y configuramos npm-run-all para correr tanto el server de APIs como el server para la vista usando run-p ...
2. Creamos la app con create-react-app y creamos componentes de clase pero mas usamos componentes funcionales con hooks.
3. Configuramos el routing de la SPA usando react-router.
4. Armamos la vista de un form usando controlled components para crear nuevos cursos.
5. Usamos una libreria de terceros (React-toastify) para notificar al usuario cuando hayamos creado satisfactoriamente un curso.
6. Para modificar un curso hacemos una llamada a mock API para obtener la info de un curso basado en su slug.
7. Implementamos el patron FLUX para manejar los estados y hacer menos peticiones al JSON server.
8. Implementamos un dispatcher que es unico para la app.
9. Implementamos un store para courses, este store debe tener registrado el dispatcher y tener 3 metedos importantes para avisar a React que los valores se actualizaron.
10. Implementamos un archivo para crear funciones action creators para mandar la informacion al dispatcher.
11. Armamos las vistas para que en vez de hacer peticiones al JSON server, obtengan la informacion del store.
