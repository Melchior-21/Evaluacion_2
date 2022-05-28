const forbidden = [
    "parseInt", "document.write", "eval", "isNAN", "unescape", "escape",
    "parseFloat", "parseInt", "eval", "isNAN", "onload", "alert", "script",
    "<", ">", "onload", "=", "(", ")", '"', "/"]

    exports.getForbidden = () => {
        return forbidden
    }

    reemplazarTodos = (palabra,reemplazar) => {
        while(palabra.includes(reemplazar)){
        console,log('se ha reemplazado ${reemplazar} en ${palabra}')
        palabra = palabra.replace(reemplazar )

    }
    return palabra

 }
 
 exports.limpiarRequest = (data) => {
     forbidden.foreach(word =>{
         var usuario = data.usuario
         var password = data.password
         usuario = reemplazarTodos(usuario,word)
         password = reemplazarTodos(password,word)
         data = {usuario,
                 password
                }
     })
     
     return data
 }

  module.exports = {
      getForbidden,
      reemplazarTodos,
      limpiarRequest,
      
  }