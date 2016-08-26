# Todo app with Angular2 and Webpack 

> A simple Todo application example built with **Angular2** and **Webpack** with deployment on Firebase. Try the demo at <a href="https://angular-todo-webpack.firebaseapp.com/" target="_blank">angular2-webpack.firebaseapp.com.

![Angular2 Todo MVC](/todo_mvc.png)

# Overview
This repo is designed to compare the production artifacts built by **SystemJS** vs. **Webpack**. Currently, the [`SystemJS`](https://github.com/JayKan/angular2-todo) repo is using `systemjs-builder` to minify, mangle and rollup to produce the production build, whereas the current repo is using Webpack's `UglifyJsPlugin` optimizer plugin to minimize and compress the final production build.       

# Dependencies
* `node >= 5.11`
* `npm > 3.x`
* globals (`npm install --global`)
    * `typescript`
    * `webpack`
    * `webpack-dev-server`
    * `tslint`
    
# Getting Started
- Clone or fork this repository
- run `nvm use` (If you have nvm installed, otherwise make sure you have node 5.11 or higher installed)
- run `npm install`
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

# Commands
|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run clean`|Remove `./target` directory|
|`npm run typings`|Install typeScript ambient typings|
|`npm run server`|Start express server @ `localhost:3000` and have nodemon watch server related code|
|`npm run build:dev`|Build `dev` application artifacts|
|`npm run build:prod`|Build `prod` application artifacts with mangle and compress mode|
|`npm run development`|Same as `npm start`|
|`npm run production`|Remove `./target` directory, build application to `./target` and start express server @ `localhost:3000` to serve built/production artifacts|

# License
[MIT](LICENSE)