import express from "express";
import { listar } from "./listar.js";
import { agregar } from "./agregar.js";
import { editar } from "./editar.js";
import { eliminar } from "./eliminar.js";

const router = express.Router();

router.get("/", listar);
router.post("/", agregar);
router.put("/:id", editar);
router.delete("/:id", eliminar);

export default router;
