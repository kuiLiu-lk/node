const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const router = require('./router/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('starting at http://localhost:3000/');
});