
import SelecaoRepository from '../../repositories/SelecaoRepository.js'

class SelecaoController{

    async index(request,response){

        const selecoes = await SelecaoRepository.findAll()
        response.json(selecoes)
    }

    async store(request,response){

        const data = request.body
        const result =  await SelecaoRepository.create(data)
        response.json(result)

    }

    async show(request,response){ 

        const selecao =  await SelecaoRepository.findById(request.params.id)
        response.json(selecao)
    }

    async delete(request,response){

        const result =  await SelecaoRepository.delete(request.params.id)
        response.json(result)
    }

    async update(request,response){

        const data = request.body
        const result =  await SelecaoRepository.update(request.params.id,data)
        response.json(result)
    }

}


//padrão Singleton

export default new SelecaoController
