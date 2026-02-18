import app from "./app.js";
import sequelize from "./src/config/database.js";
import dotenv from "dotenv";

dotenv.config();

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`API rodando na porta ${process.env.PORT}`)
    });
});



