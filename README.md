# Generate a page based on the url slug

I needed a way to test external links were correct based on different locales and this was the result.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## FAQ

- **Is it secure?**

  It is or it isn't. I've not really tested it properly but it doesn't `dangerouslySetInnerHtml` so it might be OK.

- **Does it render any markup?**

  Adding a closing tag means it doesn't load the route so no it won't render markup but will fail catastrophically instead.

- **Isn't that a bit of a problem?**

  Yeah, but it was never designed to do more than show text so 🤷🏽‍♀️.

- **Can I use it in production?**

  If you really want to. Maybe don't have it anywhere you care about though.
