import express from 'express'
import {pegar_usuario, listar_usuarios, deletar_usuario, trocar_img} from '../controlador/controlador_user.js'

const rotas_users = express.Router()

rotas_users.get('/:id', pegar_usuario)
rotas_users.get('/', listar_usuarios)
rotas_users.delete('/:id', deletar_usuario)
rotas_users.post('/trocar-img/:id', trocar_img)


export { rotas_users }