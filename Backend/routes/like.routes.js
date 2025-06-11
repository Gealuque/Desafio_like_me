import { Router } from "express"
import { getAllPosts, createPostsFoto, deletePost } from "../src/controllers/likecontroller.js"

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPostsFoto)
router.delete('/posts/:id', deletePost)


export default router