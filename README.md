Este proyecto esta creado con create-react-app, realizaremos un gestor de cursos con un mock API (JSON server).

Stack de la app:

- flux: libreria para el manejo del estado
- react-router: libreria para manejar el routing en una SPA
- bootstrap: para estilizar la app

Mock API:

npm install -D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0

- cross-env: libreria para setear env variables
- npm-run-all: nos permite correr varios scripts al mismo tiempo
- json-server: sirve nuestra mock data

Pasos:

1. Creamos la DB en memoria usando JSON server y configuramos npm-run-all para correr tanto el server de APIs como el server para la vista usando run-p ...
2. Creamos la app con create-react-app y creamos componentes de clase pero mas usamos componentes funcionales con hooks.
3. Configuramos el routing de la SPA usando react-router.
4. Armamos la vista de un form usando controlled components para crear nuevos cursos.
5. Usamos una libreria de terceros (React-toastify) para notificar al usuario cuando hayamos creado satisfactoriamente un curso.
6. Para modificar un curso hacemos una llamada a mock API para obtener la info de un curso basado en su slug.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
