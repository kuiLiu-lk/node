const router = require('koa-router')()

module.exports = router.get('/' , async (ctx) => {
  ctx.body = {
    code: 1,
    data: {
      text: 'hello world!'
    },
    msg: '成功',
  }
})

