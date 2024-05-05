import { Timestamp } from "firebase/firestore";
import { obtenerFecha } from "utils/utils";
export enum Category {
    DEPORTES = 'deportes',
    NOTICIAS = 'noticias'
}

export interface Comment {
    id: number;
    autor: string;
    comentario: string;
    idPost: number;
}

export interface LocationType {
    lat: number;
    lng: number;
}

export class Generador {
  nombreEmpresa: string;
  actividadEconomica: string;
  tipoResiduo: string[];
  cantidadMinima: number;
  numeroContacto: string;
  correo: string;
  direccion: LocationType;
  fotoResiduo: string;
  fecha: Timestamp;

  constructor(postData: {
    nombreEmpresa: string;
    actividadEconomica: string;
    tipoResiduo: string[];
    cantidadMinima: number;
    numeroContacto: string;
    correo: string;
    direccion: LocationType;
    fotoResiduo: string;
    fecha: Timestamp;
  }) {
    this.nombreEmpresa = postData.nombreEmpresa;
    this.actividadEconomica = postData.actividadEconomica;
    this.tipoResiduo = postData.tipoResiduo;
    this.cantidadMinima = postData.cantidadMinima;
    this.numeroContacto = postData.numeroContacto;
    this.correo = postData.correo;
    this.direccion = postData.direccion;
    this.fotoResiduo = postData.fotoResiduo;
    this.fecha = postData.fecha;
  }
}





