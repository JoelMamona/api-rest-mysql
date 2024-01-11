import { consulta } from '../database/conexao.js'


class SelecaoRepository{

    create(data){
        
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql,data,"Não foi possivel cadastrar")
    }

    findAll(){

        const sql = "SELECT * FROM selecoes;"
        return consulta(sql,"Não foi possivel listar")

    }

    findById(id){

        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql,id,"Não foi possivel encontrar")

    }

    update(id,data){
        
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql,[data,id],"Não foi possivel actualizar")
    }

    delete(id){
        
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql,id,"Não foi possivel excluir")

    }

}

export default new SelecaoRepository