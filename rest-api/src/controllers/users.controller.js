// import { getConnection, sql } from "../database/conection"
// import { getConnection, sql, queries } from "../database"
import { connect } from "mssql"
// import { getConnection, mysql, queries } from "../database"
import { getConnection } from "../database/conection";

export const getUsers = async(req, res) =>{
    const db = await getConnection();
    const [rows] = await db.query("SELECT * FROM usuarios")
    // console.log(rows)
    res.json(rows)
}

export const getUserId = async (req, res) =>{
    const db = await getConnection();
    const [rows] = await db.query("SELECT * FROM usuarios WHERE id =?",[
        req.params.id
    ])
    // console.log(rows)
    res.json(rows[0])
}


export const createNewUser = async (req, res) =>{
    
    try{
        const db = await getConnection();
        const [results] = await db.query(
            "INSERT INTO USUARIOS (nombre,apellido, correo, contra, departamento) VALUES (?,?,?,?,?)",
            [req.body.nombre,
                req.body.apellido,
                req.body.correo,
                req.body.contra,
                req.body.departamento
                // req.body.Id_Lugares
            ]);
            const newUser = {
                id:results.insertId,
                ...req.body
            };
            res.json(newUser);
    }
    catch(error){
        console.log(error)
    }
    // console.log(rows)
    // res.json(rows[0])
}

export const deleteUserId = async (req, res) =>{
    const db = await getConnection();
    await db.query("DELETE FROM usuarios WHERE id =?",[
        req.params.id
    ])
    console.log('se elimino')
    res.sendStatus(204)
    // .json(rows[0])
}

export const updateUserId = async (req, res) =>{
    const db = await getConnection();
    const results = await db.query("UPDATE USUARIOS SET ? WHERE id =?",[
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204)
}
