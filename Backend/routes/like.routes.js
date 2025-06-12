import { Router } from "express"
import { getAllPosts, createPostsFoto, deletePost, updateLikes } from "../src/controllers/likeController.js"

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPostsFoto)
router.put('/posts/like/:id', updateLikes)
router.delete('/posts/:id', deletePost)


export default router