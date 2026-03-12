import Produtos from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";
 
OrderItem.belongsTo(Order, {foreignKey: "orderId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" }); 
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items" });

export { Produtos, Order, OrderItem };