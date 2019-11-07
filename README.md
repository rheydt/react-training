## Pop Quiz - Day 1

1. What is destructuring? Why would you use it?
To pull a certain property or index out of an array or object. syntactic sugar to assign names to values
Useful for less repetitive typing, or removing from ...rest to not pass down when spreading.
With destructuring, things on the right win/override

2. What library renders react for the web?
React DOM

3. var is dead, why? WHat should you use instead?
const and let - mostly const
const and let can do everything that var can a bit better. they're block scoped (or just let) instead of window/document-scoped, and provide more info about the purpose of a variable (and warnings if you do something wrong).

4. How do you copy an object in JS? Is it a deep or shallow copy? What's the diff?
you can spread to copy an object, e.g. const copy = {...original}
shallow copy only, you can nest spreads to deeper copy

5. What tool did we use to generate our react app?
create-react-app

6. The tool we used uses webpack, what's that?
A bundler/builder

7. WHat is babel? Why do we need it?
A transpiler that converts ES6 to more browser compatible formats and converts JSX to HTML

8. What tool are we using to format our code? WHy is it useful?
Prettier, tells you if you have syntax errors, makes everyone's code look the same so it's more readable and consistent

9. What hook did we use for handling data that changes over time?
useState

10. When does react rerender?
When props or state changes

11. WHat hook did we use to run code once when the component first loads?
useEffect, pass it a function first then [] as in no arguments for instances in which it should rerender.

12. We create an infinite loop yesterday with that hook, what was our mistake?
We were updating state when useEffect ran

13. What tool did we use to create a mock API? WHy not just hardcode json?
json-server, data changes persisted after reloading the page

14. What did we use to make an HTTP call?
fetch

15. What is the name of React's flavor of HTML?
JSX

16. Name at least 3 differences between HTML and the answer to 15.
- className vs class
- htmlFor vs for
- object style vs inline style
- onClick (camel cased handlers) vs onclick (kabab)

17. Is JSX required?
No

18. What is JSX compiled down to?
JS -> React.createElement()

19. What tool is checking our code quality? Is it configurable? How do I see its output?
eslint, yes, reports on build/commits or look in lower

20. Debugging: how do I debug my react app?
debugger, creates breakpoints in browser if devtools are open

21. I can see my original code in the browser, is the browser running that code? If not, what technology allows me to see that code?
No, sourcemaps

22. What is a function that returns a boolean?
a predicate function

23. Name some useful array methods that are friendly to immutable data.
map, filter, reduce
push and pop mutate - don't use them

24. What is a higher order function?
A function that takes a function as an argument









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
