// import sql from 'mssql'
import mysql from "mysql2/promise"

// const dbSettings = {
//     user: 'sa',
//     password: 'CagE-05Hi',
//     server:'localhost',
//     database:'dasegi',
//     port:1433,
//     options:{
//         encrypt:true,
//         trustServerCertificate:true
//     }
    
// }
//revisamos que sql server tenga activado el protocolo tcp/ip para conectarnos al gestor, eso lo encontramos en documentacion.txt



//como es una respuesta sincrono arreglamos el codigo 

const dbSettings = {
    
    host: 'localhost',
    user:'root',
    password:'',
    // port:'443',
    database:'estacionamiento'
}

// export async function getConnection (){
export const getConnection =async()=>{

    // try{

        // const pool =await sql.connect(dbSettings);
        // const pool =await mysql.createConnection(dbSettings);
        //estas lineas es como para probar la conexion
        // const result = await pool.request().query('SELECT 1+1');
        // const [result] = await pool.query('SELECT 1+1')
        // console.log(result)
    
        // return pool; //para que alguien mas ocupe las conexiones
    // }
    // catch(error){
    //     console.log(error)
    // }

    return await mysql.createConnection(dbSettings);
}

// getConnection(); //se ejecuto solo para prueba

//exportamos ocmo el modulos
// export { mysql }

// getConnection()