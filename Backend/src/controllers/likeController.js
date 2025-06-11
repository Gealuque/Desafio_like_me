import { getPostsModel , createPostsModel, deletePostModel } from '../models/likeModel.js'

//GET
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostsModel()
        res.json(posts)
    } catch (error) {
        console.error(error)
    }
}

//POST

export const createPostsFoto = async (req, res) => {
    try {
        const { titulo, url, descripcion, likes } = req.body
        const NewPost = await createPostsModel({titulo, img:url, descripcion, likes})
        console.log(NewPost)
        res.json(NewPost)
    } catch (error) {
        console.error(error)
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
        console.log(error)
    }
}
