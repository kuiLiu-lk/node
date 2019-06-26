const router = require('koa-router')()

module.exports = router.get('/404' , async (ctx) => {
  ctx.body = '404 page'
}).get('/welcome' , async (ctx) => {
    ctx.body = 'welcome to koa2'
})

