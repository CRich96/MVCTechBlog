const { User } = require('../models');

const userData = [
  {
    username: 'CRich96',
    password: 'test1'

  },
  {
    username: 'ChrisR',
    password: 'test2'
  },
  {
    username: 'CR',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;