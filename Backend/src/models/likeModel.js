import pool from '../../config.js'

//GET

const getPostsModel = async() => {
    const sqlQuery = { text: 'SELECT * FROM posts' }
    const resultado = await pool.query(sqlQuery)
    console.log(resultado.rows)
    return resultado.rows
}

//POST

const createPostsModel = async({titulo, url, descripcion, likes}) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [titulo, url, descripcion, likes]
    }
    const resultado = await pool.query(sqlQuery)
    return resultado.rows[0]
}

export { getPostsModel , createPostsModel }