'use strict';
const {faker}  = require('@faker-js/faker') ;

let users = [];

for (let index = 0; index < 50; index++) {
  const data = {
    name: faker.name.findName(),
    address: faker.address.streetAddress(true),
    // createdAt: new Date(),
    // updatedAt: new Date()
  };
  users[index] = data
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
