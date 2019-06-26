const mysql = require('mysql');

module.exports = mysql.createPool({
  host: '127.0.0.1',   // 数据库地址
  user: 'root',    // 数据库用户
  password: 'Admin123',  // 数据库密码
  database: 'test',  // 选中数据库
})