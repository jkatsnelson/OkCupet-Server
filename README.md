# OkCupet-Server
OkCupet's server. It's high performant, enterprise ready, and scalable.

# Global dependencies:

* `npm install -g typings`
    * Typings is the new TSD. Run typings install to install the typings dependencies.

* `npm install -g webpack`
    * Webpack will compile the app.

* `npm install -g nodemon`
    * Nodemon allows you to monitor a node script for changes and restart it.

* `npm install chokidar-cli`
    * This is a good file system watcher node module. I'm using it to watch tests.

# Starting the app:

In one tab, run `webpack -w`
In another tab, run `nodemon bundle.js`
The nodemon tab will be your actual server :)

# Make this app return pets!

# After it returns pets...

How do you make your DAO access all the pets vs just one?

One option:

Make a readAll method

Another option:

Modify the read method so that the id is optional, and if there is no id, return the whole list of pets.
If you want some information on how to properly type the interface for this use case, go here: https://www.typescriptlang.org/docs/handbook/advanced-types.html
