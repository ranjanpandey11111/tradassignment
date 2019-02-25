// Import trade model
const Trades = require('./tradeModel');

exports.test =(req,res)=>{console.log("testing api call")
res.json({
  status:"success",
  message:"test api is successful"
})
}
// Handle index actions
exports.index =  (req, res)=> {
  Trades.get( (err, trade)=> {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "trade retrieved successfully",
      data: trade
    });
  });
};
// Handle create trade actions
exports.new = (req, res) => {
  let trade = new Trades();
  trade.type = req.body.type;
  trade.user = req.body.user;
  trade.symbol = req.body.symbol;
  trade.price = req.body.price;
  trade.timestamp = req.body.timestamp;
  // save the contact and check for errors
  trade.save( (err)=> {
     if (err)
    res.json(err);
    res.json({
      message: 'New trade created!',
      data: trade
    });
  });
};

//Show trade details
exports.views = (req, res) => {
  Trades.find((err, trade) => {
    if (err)
      res.send(err);
    res.json({
      message: 'Trade details loading..',
      data: trade
    });
  });
};

// Show trade details according to request params
exports.view =  (req, res)=> {
  Trades.findById(req.params.trade_id,  (err, trade)=> {
    if (err)
      res.send(err);
    res.json({
      message: 'Trade details loading..',
      data: trade
    });
  });
};

// Handle update trade info
exports.update =  (req, res)=> {
  Trades.findById(req.params.contact_id,  (err, trade)=> {
    if (err)
      res.send(err);
    trade.name = req.body.name ? req.body.name : contact.name;
    trade.gender = req.body.gender;
    trade.email = req.body.email;
    trade.phone = req.body.phone;
    // save the trade and check for errors
    trade.save( (err)=> {
      if (err)
        res.json(err);
      res.json({
        message: 'Trade Info updated',
        data: trade
      });
    });
  });
};
// Handle delete trade
exports.delete =  (req, res)=> {
  Contact.remove({
    _id: req.params.contact_id
  },  (err, contact)=> {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Trade deleted'
    });
  });
};