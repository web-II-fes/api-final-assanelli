import * as express from "express";
import { envioSchema } from './../schemas/envio';

const router = express.Router();



router.get("/envio", async (req, res) => {
    try {
      let envios = await envioSchema.find();
      res.send(envios);
    } catch (err) {
      throw err;
    }
  });
  
  router.get("/envioId/:id", async (req, res) => {
    let idEnvios = req.params.id;
    try {
      let envios = await envioSchema.findById(idEnvios);
      res.send(envios);
    } catch (err) {
      throw err;
    }
  });
  
  router.post("/envio", async (req, res) => {
    try {
      const envio = new envioSchema(req.body);
      let envioNuevo = await envio.save();
  
      res.send(envioNuevo);
    } catch (err) {
      throw err;
    }
  });
  
  router.put("/envio/:id", async (req, res, next) => {
    try {
      let envio = await envioSchema.findByIdAndUpdate(req.params.id, req.body);
      res.send(envio);
    } catch (err) {
      throw err;
    }
  });
  
  router.delete("/envio/:id", async (req, res, next) => {
    try {
      let envio = await envioSchema.findByIdAndRemove(req.params.id);
      console.log("envio Borrado: ", envio);
    } catch (err) {
      throw err;
    }
  });
  
  export = router;