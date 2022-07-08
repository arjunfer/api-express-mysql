import {Sequelize} from "sequelize";

const db = new Sequelize('ebiapps','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;