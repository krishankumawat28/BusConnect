import { Router } from "express";
import { registerUserController,verifyEmailController,loginController,refreshToken,userDetails,logoutController } from "../controllers/UserController.js";
import auth from "../middlewares/auth.js";
const userRouter = Router() ;

userRouter.post('/register',registerUserController) ;
userRouter.post('/verify-email',verifyEmailController) ;
userRouter.post('/login',loginController) ;
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)
userRouter.get('/logout',auth,logoutController) ;



export default userRouter