import mysql from "mysql"


const conexao = mysql.createConnection({

    host:'localhost',
    port:'3307',
    user:'copa',
    password:'copa',
    database: 'bdcopa'
    
})


conexao.connect()

/**
 * Executa um codigo sql
 * @param string sql 
 * @param {string | [data,id]} valores 
 * @param {string} mensagemReject 
 * @returns Promise
 */
export const consulta = (sql,valores = '', mensagemReject) =>{

    return new Promise((resolve, reject) => {
        conexao.query(sql,valores, (error, result) => {
            if (error) return reject(mensagemReject)
            const selecao = JSON.parse(JSON.stringify(result))
            return resolve(selecao)
        })
    })
}

export default conexao