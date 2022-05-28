const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const utils = require ('../resources/utils')
const {home}=require('../controllers/controller')

// rutas

router.get('index/',(request, response)=>{
    response.render('index');
})

router.post('/login', (request, response)=>{
    const tosend = utils.limpiarRequest({
        usuario: request.body.usuario,
        password: request.body.password
    })
    response.render ('login',{

                            locals: tosend
                         
                        });

})

//rutas
router.get('/index',main.getIndex)
router.get('/post',main.getpost)
router.post('/login',main.setlogin)


module.exports= router;