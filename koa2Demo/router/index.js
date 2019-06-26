const router = require('koa-router')()

const page = require('./page')
const welcome = require('./welcome')
const sel = require('./text')

router.use('/', welcome.routes(), welcome.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/sel', sel.routes(), page.allowedMethods())

module.exports = router