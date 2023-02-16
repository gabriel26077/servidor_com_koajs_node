const Koa = require('koa');
const Router = require('koa-router')

const server = new Koa();
const router = new Router();

router
    .get('/',(ctx)=>{
         ctx.body = '<h1>Você está na home</h1>';
    })
    .get('/contato', (ctx)=>{
        ctx.body =
        `<form action="/contato" method="POST">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email">
            <label for="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="mensagem"></textarea>
            <input type="submit" value="Enviar">
        </form>`;
    })
    .post('/contato',(ctx)=>{
        ctx.body=`<h1>Precisamos aprender a pegar os valores que o usuário digitou</h1>`
    })

server.use(router.routes());

server.listen(3001, ()=>{
    console.log('Servidor de pé em: http://localhost:3000');
    console.log('Para derrubar o servidor digite: crtl+c');
})