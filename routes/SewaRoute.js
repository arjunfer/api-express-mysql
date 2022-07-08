import express from "express";
import {
    getSewa, 
    getSewaById,
    createSewa,
    updateSewa,
    deleteSewa
} from "../controllers/SewaController.js";
 


const router = express.Router();
 
router.get('/sewa', getSewa);
router.get('/sewa/:id', getSewaById);
router.post('/Sewa', createSewa);
router.patch('/Sewa/:id', updateSewa);
router.delete('/Sewa/:id', deleteSewa);
 
export default router;