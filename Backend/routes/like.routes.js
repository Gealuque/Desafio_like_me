import { Router } from "express"
import { getAllPosts, createPostsFoto } from "../src/controllers/likecontroller.js"

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPostsFoto)


export default router