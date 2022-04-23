module.exports = {createCat, getCats, getRandomCat};
const Cat = require('../models/cat');
const {notFound, badRequest} = require('../config/errorHelper');

async function createCat(req, res, next) {
  try {
    const cat = await Cat.create(req.body);
    res.status(201).json({status: 'success', code: 201, data: {cat}});
  } catch (error) {
    next(error);
  }
}

async function getCats(req, res, next) {
  try {
    const cats = await Cat.find({});
    if (!cats.length) {
      throw notFound('Cats not found');
    }
    res.status(200).json({status: 'success', code: 200, data: {cats}});
  } catch (error) {
    next(error);
  }
}

async function getRandomCat(req, res, next) {
  try {
    const cats = await Cat.find({});
    if (!cats.length) {
      throw notFound('Cats not found');
    }

    const catsAmount = cats.length;
    function getRandom(max) {
      return Math.floor(Math.random() * max);
    }

    res.status(200).json({status: 'success', code: 200, data: cats[getRandom(catsAmount)]});
  } catch (error) {
    next(error);
  }
}
