/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
const app = express();
import * as bodyParser from 'body-parser';

import DAO = require('./in-memory-dao');

// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port: number = process.env.PORT || 8888;
const router = express.Router();
const petDAO: DAO.InMemoryPetDAO = new DAO.InMemoryPetDAO();

router.get('/', function(req, res) {
  if (req.query.id) {
    res.json(petDAO.read(req.query.id));
  } else {
    res.json(petDAO.readAll())
  }
});
router.post('/', function(req, res) {
  res.json(petDAO.create(req.body));
});
router.put('/', function(req, res) {
  res.json({ result: petDAO.update(req.body) });
});
router.delete('/', function(req, res) {
  res.json({ result: petDAO.delete(req.query.id) });
});

// prefixed all routes with /api
app.use('/api', router);

app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');

