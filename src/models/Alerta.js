import mongoose from "mongoose";
import Usuario from "./Usuario";
var usuarioSchema = Usuario.schema;

const Schema = mongoose.Schema;

let AlertaSchema = new Schema(
  {
    descripcion: { type: String },
    ubicacionInicialLatitud: { type: String, required: true },
    ubicacionInicialLongitud: { type: String, required: true },
    usuario: { type: usuarioSchema, required: true},
    estado: { type: Boolean, default: true},
    creadoEn: { type: Date, default: new Date() }
  },
  {
    versionKey: false
  }
);

export default mongoose.model("alerta", AlertaSchema);