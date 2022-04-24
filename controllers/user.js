module.exports = {createUser, getUsers};
const User = require('../models/user');
const {notFound, badRequest} = require('../config/errorHelper');

async function createUser(req, res, next) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({status: 'success', code: 201, data: {user}});
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await User.find({});
    console.log(users);
    if (!users.length) {
      throw notFound('User not found');
    }
    res.status(200).json({status: 'success', code: 200, data: {users}});
  } catch (error) {
    next(error);
  }
}
