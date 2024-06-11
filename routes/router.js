import { Router } from "express";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/demo", (req, res) => {
  res.sendFile(__dirname + "/views/FU-demo.html");
});

router.post("/demo", (req, res) => {
  const { foto } = req.files;
  const { name } = foto;
  foto.mv(`${__dirname}/public/img/${name}`, (err) => {
    res.send("Archivo cargado con éxito");
  });
});

router.delete("/imagen/:nombre", (req, res) => {
  const { nombre } = req.params;
  fs.unlink(`${__dirname}/public/imagenes/${nombre}.jpg`, (err) => {
    if (err) return res.status(500).send(err);
  });
  res.send(`Imagen ${nombre} fue eliminada con éxito`);
});

export default router;
