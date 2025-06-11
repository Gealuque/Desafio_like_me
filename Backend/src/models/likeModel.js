import { text } from 'express'
import pool from '../../config.js'

//GET

const getPostsModel = async() => {
    const sqlQuery = { text: 'SELECT * FROM posts' }
    const resultado = await pool.query(sqlQuery)
    console.log(resultado.rows)
    return resultado.rows
}

//POST

const createPostsModel = async({titulo, img, descripcion, likes}) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [titulo, img, descripcion, likes]
    }
    const resultado = await pool.query(sqlQuery)
    return resultado.rows[0]
}

//DELETE

const deletePostModel = async (id) => {
    const sqlQuery = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id]
    }
    const resultado = await pool.query(sqlQuery)
    return resultado.rowCount
}

export { getPostsModel , createPostsModel, deletePostModel }