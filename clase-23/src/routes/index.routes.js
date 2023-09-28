import { Router } from "express";
import cartRouter from "./cart.routes";
import productRouter from "./products.routes";
import sessionRouter from "./sessions.routes";
import userRouter from "./users.routes";

const router = Router()

router.use('/api/product', productRouter)
router.use('/api/user', userRouter)
router.use('/api/carts', cartRouter)
router.use('/api/sessions', sessionRouter)

export default router