import app from "./app.js";
import sequelize from "./src/config/database.js";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.set("io", io);

io.on("connection", (socket) => {
    console.log("Admin conectado: ", socket.id);

    socket.on("disconnect", () => {
        console.log("Admin desconectado: ")
    })
})

dotenv.config();

sequelize.sync().then(() => {
    server.listen(process.env.PORT, () => {
        console.log(`API rodando na porta ${process.env.PORT}`)
    });
});



