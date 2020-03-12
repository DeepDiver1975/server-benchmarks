process.env.NODE_ENV = 'production';

const Koa = require('koa');
const Router = require('@koa/router');
const createWorker = require('throng');


createWorker(createWebServer) // to make it multi-threading/faster.

function createWebServer() {
    const app = new Koa();
    const router = new Router();

    router.get('/', function (ctx) {
        ctx.body = 'Index';
    });

    app.use(router.routes());
    app.listen(5000);
}