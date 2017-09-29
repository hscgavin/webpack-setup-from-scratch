# Webpack: step-by-step setup from scratch
> This demo(tutorial) uses the latest webpack 3.6.0 

Simple step by step tutorial with each commit show you how to setup webpack.

## What is Webpack
[Webpack](https://github.com/webpack/webpack) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
![](doc_imgs/webpack.png?raw=true)


## Setup

#### Install

open terminal and run below commands:

```bash
mkdir webpack-setup-from-scratch
cd webpack-setup-from-scratch
npm init 
// You can install webpack globally
// Here we install webpack locally and put it in devDependencies
npm install --save-dev webpack
```
**Time to get your hands dirty**

Create folders and files is shown below (ignore doc_imgs):
![](doc_imgs/app-structure.png?raw=true)

Write code as follow:

```js
// greet.js
// Node export style
module.exports = function(person, greeting) {
    return greeting + ', ' + person
}
// index.js
var greet = require('./greet')
console.log(greet('Rebecca', 'Hello'))
```

Create index.html under project
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script src="./build/bundle.js"></script>
</body>
</html>
```

Now we will start our simple webpack setup, create a file `webpack.config.js` under the project with following code:

```js

const path = require('path')
module.exports = {
    entry:  './app/index.js', // entry file
    output: {
      path: path.resolve(__dirname, 'build'), // output with absolute path
      filename: "bundle.js" // bundle file name
    }
  }
```

There we go! We have our very basic webpack file. It’s not that hard is it? It’s easy!

Now we can start our webpack, open the terminal type the following script:

```
node_modules/.bin/webpack
```

If everything goes well, you should see something like the screenshot below:

![](doc_imgs/first-build.png?raw=true)

what’s this? This basically a report log what Webpack has done.

It tells you the bundle hash value, webpack version, bundle time, size of `bundle.js` and the each files' details.

Wait, why size of `index.js` + size of `greet.js` is only 150B, but size of `bundle.js` is 2.7KB, way bigger.

Let's inspect `bundle.js` -- `module.exports` is not support on browser, so webpack injected a bunch of code to make this node function can run on client browser.

Well done! You just made your very first Webpack project.

But we don't want to type `node_modules/.bin/webpack` everytime we make code change. We simplify it by adding the following code to `package.json`
```js
"scripts": {
    "start": "webpack"
  },
```
Now you can just run `npm run start` on your terminal. 

We just covered the basic usage of webpack, next we will cover how to leverage all of the fancy functionality, like watching for file changes, compiling SCSS to CSS ect.
