const { query } = require('../config/query')

async function selectAllData( ) {
  let sql = 'SELECT * FROM test'
  let dataList = await query( sql )
  return dataList
}

module.exports = {
    selectAllData
}