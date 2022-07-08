import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Sewa = db.define('sewa',{
    durasi_waktu: DataTypes.STRING,
    harga: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Sewa;
 
(async()=>{
    await db.sync();
})();