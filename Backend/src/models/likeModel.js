
import pool from '../../config.js'
import crypto from 'crypto'

//GET

const getAllLikesModel = async() => {
    const sqlQuery = { text: 'SELECT * FROM likeme' }
    const resultado = await pool.query(sqlQuery)
    console.log(resultado.rows)
    return resultado.rows
}

//POST

const createPostModel = async({titulo, img, descripcion, likes}) => {
    const Nid = crypto.randomUUID()
    const sqlQuery = {
        text: 'INSERT INTO likeme (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        values: [Nid, titulo, img, descripcion, likes]
    }
    const resultado = await pool.query(sqlQuery)
    return resultado.rows[0]
}

export { getAllLikesModel, createPostModel }