import {Router} from 'express'
import SelecaoController from './app/controllers/Selecao/SelecaoController.js'


const router = Router()

// Rotas

router.get('/selecoes',SelecaoController.index)
router.post('/selecoes',SelecaoController.store)
router.get('/selecoes/:id', SelecaoController.show)
router.put('/selecoes/:id', SelecaoController.update)
router.delete('/selecoes/:id',SelecaoController.delete)

export default router