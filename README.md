# WeatherApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![alt text](https://github.com/anagonm/weatherapp/blob/main/public/image1.png?raw=true)
![alt text](https://github.com/anagonm/weatherapp/blob/main/public/image2.png?raw=true)
![alt text](https://github.com/anagonm/weatherapp/blob/main/public/image3.png?raw=true)
![alt text](https://github.com/anagonm/weatherapp/blob/main/public/image4.png?raw=true)

# Features

- See weather by latitude and longitude
- See weather by city
- Allows to share with friends
- Get forecast data for next days

# Running the project

- Add an .env file locally with the following value:
```
REACT_APP_API_KEY=bf1548ea41975ce03a084e2e8c1501bf
```

- Install node 18 preferably and install the project deps
```
$ nvm install 18;
$ yarn install
```

- Run the project
```
$ yarn start
```

That should be all.

If you encounter any issues with the API key and .env file modify `src/utils/constants.js` and change this line:
```
export const API_KEY          = process.env['REACT_APP_API_KEY'];
```
by
```
export const API_KEY          = "<OpenWeatherKeySecretValue>";
```

For testing <OpenWeatherKeySecretValue> is `bf1548ea41975ce03a084e2e8c1501bf`

# Useful Links

- https://openweathermap.org/api/one-call-3
- https://www.tutorialrepublic.com/html-tutorial/html5-geolocation.php
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
- https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/
- https://redux.js.org/introduction/why-rtk-is-redux-today
- https://polvara.me/posts/mocking-context-with-react-testing-library

# Dependencies

- Redux
- Redux Toolkit
- Jest
- testing-library
- React
- React Redux

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test --coverage --watchAll`

Run the tests and reports the coverage

![alt text](https://github.com/anagonm/weatherapp/blob/main/public/coverage.png?raw=true)


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
