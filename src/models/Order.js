import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Order = sequelize.define("orders", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observacao: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM( "PENDING", "PREPARING", "READY", "DELIVERED", "CANCELLED" ),
        defaultValue: "PENDING"
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Order;