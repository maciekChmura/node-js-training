'use strict';

const asyncWrapper = require('./asyncWraper');

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const routes = (app, dbs) => {
  app.get('/', asyncWrapper(async (req, res) => {
    const cursor = await dbs.collection('cities').find({}).toArray();
    res.json(getRandomItem(cursor));
  }));
  return app;
};

module.exports = routes;
