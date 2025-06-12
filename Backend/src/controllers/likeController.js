import { getPostsModel , createPostsModel, deletePostModel, updateLikesModel } from '../models/likeModel.js'

//GET
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostsModel()
        res.json(posts)
    } catch (error) {
        res.json({ error: 'Error al Obtener los Posts'})
        console.error('Error:', error)
    }
}

//POST

export const createPostsFoto = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body
        const NewPost = await createPostsModel({titulo, img:url, descripcion})
        console.log(NewPost)
        res.json(NewPost)
    } catch (error) {
        res.json({ error: 'Error al Crear'})
        console.error('Error:', error)
    }
}

//PUT

export const updateLikes = async(req, res) => {
    try {
        const {id} = req.params
        const likes = await updateLikesModel(id)
        res.json(likes)
    } catch (error) {
        res.json({ error: 'Error al actualizar'})
        console.error('Error:', error)
    }
}

//DELETE

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params
        const posts = await deletePostModel(id)
        if( posts === 0){
            return res.json(error)
        }
        res.json('Post Borrado')
    } catch (error) {
        res.json({ error: 'Error al Borrar'})
        console.error('Error:', error)
    }
}
