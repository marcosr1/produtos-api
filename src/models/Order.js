import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Order = sequelize.define("orders", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "PEDING"
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