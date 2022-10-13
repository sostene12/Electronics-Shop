import  express  from "express";
import Signup_post from '../controllers/userController'
const router=express.Router()
router.post('/signup',Signup_post)
export default router