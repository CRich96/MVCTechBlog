const { User } = require('../models');

const userData = [
  {
    username: 'CRich96',
    email: "chris575502@gmail.com",
    password: 'test1'

  },
  {
    username: 'ChrisR',
    email: "CR1996@gmail.com",
    password: 'test2'
  },
  {
    username: 'CR',
    email: "CR@gmail.com",
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;