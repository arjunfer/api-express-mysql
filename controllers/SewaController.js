import Sewa from "../models/SewaModel.js";
 
export const getSewa = async(req, res) =>{
    try {
        const response = await Sewa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getSewaById = async(req, res) =>{
    try {
        const response = await Sewa.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createSewa = async(req, res) =>{
    try {
        await Sewa.create(req.body);
        res.status(201).json({msg: "Sewa Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateSewa = async(req, res) =>{
    try {
        await Sewa.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Sewa Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteSewa = async(req, res) =>{
    try {
        await Sewa.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Sewa Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}