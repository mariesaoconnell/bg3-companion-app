db = require('./db')
helper = require('../helper')
const config = require('../config')

async function getCompanions(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM companions LIMIT ${offset}, ${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

module.exports = {
  getCompanions
}
