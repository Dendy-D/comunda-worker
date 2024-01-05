import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST_NAME;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        plain: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
});

export default sequelize;
