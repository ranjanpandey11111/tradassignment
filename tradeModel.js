// contactModel.js
const mongoose = require('mongoose');
// Setup schema
const tradingSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  user: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  symbol: {
    type: String,
    required: true
  },
  price: { 
    type: String ,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export Contact model
const Trading = module.exports = mongoose.model('trading', tradingSchema);
module.exports.get =  (callback, limit)=> {
  Trading.find(callback).limit(limit);
}