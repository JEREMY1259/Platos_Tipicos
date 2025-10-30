import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gastronomiaRoutes from "./api/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Usar rutas CRUD
app.use("/api/gastronomia", gastronomiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
