import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Outlet = db.define('outlet',{
    nama_outlet: DataTypes.STRING,
    alamat: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Outlet;
 
(async()=>{
    await db.sync();
})();