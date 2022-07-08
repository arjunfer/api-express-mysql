import express from "express";
import {
    getOutlet, 
    getOutletById,
    createOutlet,
    updateOutlet,
    deleteOutlet
} from "../controllers/OutletController.js";
 


const router = express.Router();
 
router.get('/Outlet', getOutlet);
router.get('/Outlet/:id', getOutletById);
router.post('/Outlet', createOutlet);
router.patch('/Outlet/:id', updateOutlet);
router.delete('/Outlet/:id', deleteOutlet);
 
export default router;