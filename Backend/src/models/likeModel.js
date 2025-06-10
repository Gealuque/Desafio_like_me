
import pool from '../../config.js'
import {v4 as uuid} from 'uuid'

//GET

const getPostsModel = async() => {
    const sqlQuery = { text: 'SELECT * FROM posts' }
    const resultado = await pool.query(sqlQuery)
    console.log(resultado.rows)
    return resultado.rows
}

//POST

const createPostsModel = async({titulo, img, descripcion, likes}) => {
    const GenerarId = uuid()
    const sqlQuery = {
        text: 'INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        values: [GenerarId, titulo, img, descripcion, likes]
    }
    const resultado = await pool.query(sqlQuery)
    return resultado.rows[0]
}

export { getPostsModel , createPostsModel }