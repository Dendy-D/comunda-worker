import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Document_sign_matrix = sequelize.define('Document_sign_matrix', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    document_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignee_position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignee_department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    approver_position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    approver_department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Document_sign_matrix;
