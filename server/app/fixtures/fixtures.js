const faker = require('faker');

const loadFixtures = () => {
    console.log(faker.internet.email())
};

module.exports = { loadFixtures };