### Install Loki with npm:

````bash
$ npm i -D loki
````

### OR with Yarn:

1. Install Yarn **globally**:

````bash
$ npm install --global yarn
````

2. Install Loki:

````bash
$ yarn add loki --dev
````

---

### Init Loki with npm:

````bash
$ npx loki init
````

### Or with Yarn:

````bash
$ yarn loki init
````

---

### Install and run Storybook:

````bash 
$ npx sb init
$ npm run storybook
````

---

> Loki uses `netstat` to find free port:
> ````bash
> $ sudo apt install net-tools
> ````

---

1. Run Loki to scan components and create screenshots:

````bash
$ npx loki test               
loki test v0.32.0
(node:1200999) NOTE: We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.

Please migrate your code to use AWS SDK for JavaScript (v3).
For more information, check the migration guide at https://a.co/7PzMCcy
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  chrome.docker/chrome.laptop/Example/Button
 PASS  chrome.docker/chrome.laptop/Example/Header
 PASS  chrome.docker/chrome.laptop/Example/Page
 PASS  chrome.docker/chrome.iphone7/Example/Button
 PASS  chrome.docker/chrome.iphone7/Example/Header
 PASS  chrome.docker/chrome.iphone7/Example/Page
 PASS  chrome.docker
````

2. Make some changes to styles/components.

3. Run Loki to scan components again:

````bash
$ npx loki test
loki test v0.32.0
(node:1211851) NOTE: We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.

Please migrate your code to use AWS SDK for JavaScript (v3).
For more information, check the migration guide at https://a.co/7PzMCcy
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  chrome.docker/chrome.laptop/Example/Button
 PASS  chrome.docker/chrome.laptop/Example/Header
 FAIL  chrome.docker/chrome.laptop/Example/Page
       Logged Out
       Screenshot differs from reference, see .loki/difference/chrome_laptop_Example_Page_Logged_Out.png
       Logged In
       Screenshot differs from reference, see .loki/difference/chrome_laptop_Example_Page_Logged_In.png
 PASS  chrome.docker/chrome.iphone7/Example/Button
 PASS  chrome.docker/chrome.iphone7/Example/Header
 FAIL  chrome.docker/chrome.iphone7/Example/Page
       Logged Out
       Screenshot differs from reference, see .loki/difference/chrome_iphone7_Example_Page_Logged_Out.png
       Logged In
       Screenshot differs from reference, see .loki/difference/chrome_iphone7_Example_Page_Logged_In.png
 FAIL  chrome.docker
Visual tests failed
You can update the reference files with:
loki update --storiesFilter="^Example\\/Page Logged Out|Example\\/Page Logged In\$"
```` 

4. If everything is OK then approve changes:
````bash
$ npx loki approve
loki approve v0.32.0
````

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single
build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so
you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can
tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated
to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
