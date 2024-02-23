import { Sequelize } from "sequelize";


const sequelize = new Sequelize('store', 'root', 'Mysqlluis2024', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;