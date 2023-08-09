import { Router } from "express"; //nos permite crear url
import { getUsers, 
        getUserId,
        createNewUser,
        deleteUserId, 
        updateUserId } from "../controllers/users.controller";

const router = Router()


//ruta para usuarios
router.get('/users', getUsers) //obtener usuarios
router.get('/users/:id', getUserId) //obtener usuarios
router.post('/users',createNewUser)
router.delete('/users/:id',deleteUserId)
router.put('/users/:id',updateUserId)







export default router
