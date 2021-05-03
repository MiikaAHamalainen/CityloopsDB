const mongoose = require('mongoose');
mongoose.set('debug', true);

var CalcPointSchema = mongoose.Schema({
  // tilan nimi/numero
  shortDesc: String,
  // Kasa/irrotettava
  lotCategory: String,
  // Kappalemäärä
  lotQuantity: Number,
  // Tilavuus/paino
  lotVolumeWeight: Number,
  // Tilavuuden/painon yksikkö
  lotVolumeWeightUnit: String,
  // kerros
  cpFloorNumber: Number, 
  // Lattiamateriaali
  cpFloorMaterial: String,
  // katto
  cpRoofMaterial: String,
  // Seinämateriaali
  cpCeilingMaterial: String,
  // Valmis myytäväksi
  lotReady: Boolean,

  // lisätietoja
  longDesc: String,
  // coordinates: String,
  createdAt: {
    type: Date,
    default: Date.now
  },

  results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Results' }],
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GFS'  }]
});

var BuildingSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },

  //nimi
  buildingName: String,
  // lähiosoite
  buildingAddress: String,
  // kunta
  buildingCounty: String,
  // omistaja/hallinnoija
  buildingOwner: String,
  // Rakennusvuosi
  buildingYear: Number,
  // Rakennustunnus
  buildingIdentifier: String,
  // Käyttötarkoitus
  buildingType: String,
  // Perustustapa
  buildingFoundation: String,
  // Kantava runko
  buildingMaterial: String,
  // Pääasiallinen ulkoseinärakenne
  buildingOuterWall: String,
  // Katto
  buildingRoof: String,
  // Kerrosluku
  buildingFloorsNumber: Number,
  // Lisätietoja
  buildingDesc: String,

  // DATA OWNER, DEFINED IN KEYCLOAK GROUPS!
  dataOwner: String,

  createdAt: {
    type: Date,
    default: Date.now
  },
  calcPoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CalcPoint' }],
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GFS'  }]
});

var MeasurementResultsSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  // mittauspvm
  resultdate: Date,
  //sää
  weather: String,
  //tulokset
  measurementMetrics: String,
  reportResults: String,
  resultDetails: String,
  
  parentId: String,

  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GFS'  }]
});

var Building = mongoose.model('Building', BuildingSchema);
var CalcPoint = mongoose.model('CalcPoint', CalcPointSchema);
var Result = mongoose.model('Results', MeasurementResultsSchema);

// Schema for GridFS files
var GFS = mongoose.model("GFS", new mongoose.Schema({
  originalname : String,
  parentId : String,
  fileDesc : String,
  fileDescNumeric : String,
}, {strict: false}), "fs.files" );

module.exports = {
  CalcPoint,
  Building,
  GFS,
  Result
}