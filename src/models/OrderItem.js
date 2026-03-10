import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const OrderItem = sequelize.define("orderItem", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    nomeProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

export default OrderItem;