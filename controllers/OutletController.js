import Outlet from "../models/OutletModel.js";
 
export const getOutlet = async(req, res) =>{
    try {
        const response = await Outlet.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getOutletById = async(req, res) =>{
    try {
        const response = await Outlet.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createOutlet = async(req, res) =>{
    try {
        await Outlet.create(req.body);
        res.status(201).json({msg: "Outlet Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateOutlet = async(req, res) =>{
    try {
        await Outlet.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Outlet Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteOutlet = async(req, res) =>{
    try {
        await Outlet.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Outlet Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}