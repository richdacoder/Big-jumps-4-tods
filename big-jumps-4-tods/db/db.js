const knex = require('knex');
const knexfile = require('../knexfile.js');

const db = knex(knexfile.local); // use local config directly

module.exports = db;
