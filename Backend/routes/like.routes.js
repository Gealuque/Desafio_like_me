import { Router } from "express"
import { getAllLikes, createPostFoto } from "../src/controllers/likecontroller.js"

const router = Router()

router.get('/posts', getAllLikes)
router.post('/posts', createPostFoto)



export default router