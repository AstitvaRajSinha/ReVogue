import express from "express";
import {
    addResellProduct,
    listApprovedResellProducts,
    removeResellProduct,
    singleResellProduct
} from "../controllers/resellProductController.js";
import  authUser  from "../middleware/auth.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" }); // temp folder for images
const router = express.Router();

router.post('/add',authUser,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addResellProduct);

router.get("/list", listApprovedResellProducts);
router.post("/remove", authUser, removeResellProduct);
router.post("/single", singleResellProduct);

export default router;
