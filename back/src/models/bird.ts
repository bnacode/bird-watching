import mongoose from "mongoose";

const Schema = mongoose.Schema;

const birdSchema = new Schema({
  latinski_naziv: {
    type: String
  },
  naziv: {
    type: String
  },
  drugi_naziv: {
    type: String
  },
  porodica: {
    type: String
  },
  slika_m: {
    type: String
  },
  slika_z: {
    type: String
  },
  tip: {
    type: String
  },
  boja_m: {
    type: String
  },
  boja_z: {
    type: String
  },
  opis: {
    type: String
  },
  duzina_tela: {
    type: String
  },
  raspon_krila: {
    type: String
  },
  tezina: {
    type: String
  },
  ishrana: {
    type: String
  },
  staniste: {
    type: String
  },
  gnezdenje: {
    type: String
  },
  prisutnost: {
    type: String
  },
  snimak: {
    type: String
  },
  pesma: {
    type: String
  },
  zov_zenke: {
    type: String
  },
  zov: {
    type: String
  }, 
  zov_u_letu: {
    type: String
  }, 
  uzbuna: {
    type: String
  },
  zov_mladunaca: {
    type: String
  },
  br: {
    type: Number
  },
  engleski_naziv: {
    type: String
  }
});

export default mongoose.model('BirdModel', birdSchema, 'Ptice');
