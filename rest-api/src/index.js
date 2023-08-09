import app from './app'
// import './database/conection'//  esto era para probar que pudieramos ver lo de database/conection.js  




app.listen(app.get('port')); //para que se habra o conecte por el puerto 3000

console.log('server on port', app.get('port'));