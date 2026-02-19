import Produtos from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

Order.hasMany(OrderItem, {
    foreignKey: "orderKey",
    as: "items"
});

OrderItem.belongsTo(Order, {
    foreignKey: "orderId"
});

export { Produtos, Order, OrderItem };