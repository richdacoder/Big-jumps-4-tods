const knex = require('knex');
const knexfile = require('../knexfile.js');

const env = process.env.NODE_ENV || 'local';

console.log(`🚀 Database connecting to: ${env} mode`);

const db = knex(knexfile[env]);

module.exports = db;
