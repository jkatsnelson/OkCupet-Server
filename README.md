# OkCupet-Server
OkCupet's server. It's high performant, enterprise ready, and scalable.

# Global dependencies:

* `npm install -g typings`
    * Typings is the new TSD. Normally, you run `typings install` to install the type dependencies for stuff like express. But, in this case, I commited the typings so that nothing weird happens :)

* `npm install -g webpack`
    * Webpack will compile the app.

* `npm install -g nodemon`
    * Nodemon allows you to monitor a node script for changes and restart it.

* `npm install chokidar-cli`
    * This is a good file system watcher node module. I'm using it to watch tests.

# Starting the app:

In one tab, run `webpack -w`
In another tab, run `nodemon bundle.js`
The nodemon tab will be your API.

In yet another tab, run `npm run autotest` -- this will keep your mocha tests constantly running.
