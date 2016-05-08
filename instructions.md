# Section 1: Tutorial

http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html

This tutorial goes over the gamut of building a good node web server:
it uses the node inspect for debugging, goes over unit tests, and compilation tools.

### Gotchas

#### Debug section
The debugger's default port is the same default port as the express server: 8080.
You can either change the default port of the express server, or run node inspector like this:

```bash

$ node-debug --web-port=8888 dev/rest-test.js;

```

This way, the debugger will run on 8888 and the express server will run on 8080 -- no conflicts!

In general, this tutorial isn't good at keeping ports straight, so just be careful :) (the postman section also has the wrong port number)

#### Postman section

As mentioned above, the Postman section gets ports mixed up. Just make sure that you access your API at the port it logs in the console.

#### Test section

Make your files in {project}/test

#### Grunt section

When you get to the grunt section, refactor your file structures to look like this: https://github.com/geraldpereira/rest-crud/
And, npm install -g grunt
If you have issues with this part, just clone the rest-crud github repo, and run that. That way, you can experiment with the grunt commands and see how it all works.
If you STILL have issues with installation, just skip this entirely :)


# Section 2: Build a unit-tested typescript express app for helping pets find dates!

With what you learned in the tutorial, build an HTTP server in typescript that takes a GET request at "/pets" and returns an array of pet models like this:

```json

[{
    id: 0
    name: "Maximus Meridius Decimus III",
    description: "French Bulldog, genetic masterpiece, destroyer of balls.",
    address: "350 Frank Ogawa Plaza, Oakland, CA 94606",
    age: 2,
    favoriteToy: "Ball",
    favoriteActivity: "Sprinting",
    image: "www.google.com/something.jpg"
}]

```

Make sure it's unit tested :-D

You have a few options on how to get started:

### Try building it all yourself.

Use your favorite seed, or write your own gulp process, or write some simple npm
run scripts that can compile your app.
I would only choose this method if you want to dive into build tools. Getting
type definitions working can be pretty tricky, but a good exercise for those who
dare.

If you go this route, I'd suggest trying hapi.js -- walmart labs wrote a competitor to Express
and I hear great things about it.

### Use a starter that I wrote, with webpack and typings: https://github.com/jkatsnelson/OkCupet-Server

The master branch is a good starting point. I would fork this into your own github and start from that.
If you don't know what I mean by forking, I highly recommend looking up 'what is a github fork'.

There are two other branches: jk-rest-crud and jk-pet-rest-crud
I initialed them out of habit -- we always initialed our branches at Monsoon :)

The jk-rest-crud branch is an exact replica of the tutorial's application, refactored slightly for this stack.
It's possible to just adapt that tutorial application for the pet example, if you'd like to take the easy route.

The jk-pet-rest-crud branch is the tutorial application refactored to send pets instead of users.

### Regardless of your approach, here are some assignments:

#### Use a data access object to make your CRUD logic testable
Your data access object should be capable of all CRUD operations, and all of those operations should be unit tested.
You should make calls to your data access object from your router methods in express (or whatever framework you choose to use)

#### Add a way to to return a list of ALL pets.

The DAO that we built in the tutorial only sends one individual user at a time.
In our case, we want to be able to send individual pets as well as the full pet list.

Here are some thoughts on doing this:

One option:

Make a readAll method on the DAO

Another option:

Modify the read method so that the id is optional, and if there is no id, return the whole list of pets.
Make sure you fix the interface to allow this :)

Here is a gotcha if you're using the pet-crud app:

The tutorial app had its list of users as an indexed object, like this:

```json
{
  "0": {(user object)}
}
```

At first, you should probably have the readAll method, or whatever you implement, just send this list.
But, the angular 2 app isn't built to deal with that. It's built to deal with a normal array vs. an indexed object.

You could either:
1. Refactor the angular 2 logic to use this alternative format
2. Refactor the DAO somehow to send a normal array.

Whatever you do, don't forget to unit test :)
