import { Schema, model } from 'mongoose';

const schemaEnvio = new Schema({
    nombreRemitente: String,
    direccion: String,
    descripcionPaquete: String,
    fechaEntrega: Date
});

export let envioSchema = model('schemaEnvio', schemaEnvio, 'envios');
