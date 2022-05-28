const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const utils = require ('../resources/utils')
const {home}=require('../controllers/controller')

const getpost = (request ,response) => {
    var posts =[

        First Name: " Melchior",
        Last Name: " Saint-Preux",
        Date: "27/05/22",
        Address: "New placilla # 9",
        Mail: "farelsaintpreux90@gmail.com",
        Comments: "I'm a pupil of the Technical Training Center in viña del mar",

    ]
    response.render('post',{
        locals: {posts}
    
    })

}

// rutas

router.get('index/',(request, response)=>{
    response.render('index');
})

router.post('/login', (request, response)=>{
    const tosend = utils.limpiarRequest({
        
        usuario: request.body.usuario,
        password: request.body.password
        email: request.body.email
        sitio: request.body.sitio,
        comentario: request.body.comentario,

    })
    response.render ('login',{

                            locals: tosend
                         
                        });

})
