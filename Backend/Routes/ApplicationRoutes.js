import express from "express";
import { getApplication, postApplication,deleteApplication,updateApplication ,LoginApplicants,verifyToken,retrApplication,refreshToken,verifyAuth,logout} from "../Controllers/ApplicationController.js";


const router = express.Router();

router.get("/list",getApplication);
router.post("/signup",postApplication);
router.post("/login",LoginApplicants);
router.delete("/delete/:id",deleteApplication);
router.put("/update",updateApplication);
router.get("/user",verifyToken,retrApplication);
router.get("/Authorize",verifyAuth);
router.get("/refresh",refreshToken);
router.post("/logout",logout);
export default router;