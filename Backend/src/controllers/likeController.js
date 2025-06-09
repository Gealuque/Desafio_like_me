import { getAllLikesModel, createPostModel } from '../models/likeModel.js'

//GET
export const getAllLikes = async (req, res) => {
    try {
        const likes = await getAllLikesModel()
        res.json(likes)
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error en la petición' })
    }
}

//POST

export const createPostFoto = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body
        const NewPost = await createPostModel({titulo, img: url, descripcion, likes:0})
        res.json(NewPost)
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error en la creación' })
    }
}
