const router = require('koa-router')();
const { selectAllData } = require('../sql/test')

module.exports =  router.get('/select', async (ctx) => {
    let list = await selectAllData();
    let result = JSON.stringify(list);
    ctx.body = {
        code: 1,
        data: JSON.parse(result),
        msg: '成功',
    }
    console.log(result,'result')
})

