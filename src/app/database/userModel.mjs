import DB from './db.mjs';
import Sequelize from 'sequelize';

const userModel = DB.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "first_name",
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "last_name",
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "email",
    },
    gender: {
        type: Sequelize.ENUM('male', 'female', 'unknown'),
        allowNull: false,
        defaultValue: 'unknown',
        field: "gender",
    },
    phoneNumber: {
        type: Sequelize.STRING(20),
        defaultValue: null,
        field: "phone_number",
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "password",
    },
    avatarUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://example.com/default-avatar.png',
        field: "avatar_url",
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "created_at",
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "updated_at",
    },
    note: {
        type: Sequelize.TEXT,
        defaultValue: null,
        field: "note",
    }
}, {
    tableName: 'user',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
})

export default userModel;