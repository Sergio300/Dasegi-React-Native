import express from 'express'
import config from './config';
import usersRoutes from './routes/users.routes'

const app = express()

// let port; //para que uses una variable

//settings, para configurar el puerto
app.set('port' , config.port ); //para que vea que puerto esa como disponible sino que use el 3000 por defecto


//middlewares, para que podamos leer json pasado por post al backend
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //para leer de un formulario html


app.use(usersRoutes)


export default app