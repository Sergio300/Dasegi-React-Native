import { config } from 'dotenv'
config();


console.log(process.env.NICKNAME)  //para tomar las variables de entorno

export default {
    port: process.env.PORT || 4000
}