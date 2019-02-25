// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
// Import contact controller
const tradeController = require('./tradeController');

router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});

// Contact routes
//const mainRoute =router.route('/contacts')
router.get('/test', tradeController.test);
router.delete('/erase', tradeController.delete);
router.post('/trades', tradeController.new);
router.get('/trades', tradeController.views);
router.get('/trades/users/:user_id', tradeController.view)
//router.route('/stocks/{stockSymbol}/trades?type={tradeType}&start={startDate}&end={endDate}', tradeController.view)
//router.route('/stocks/{stockSymbol}/trades?type={tradeType}&start={startDate}&end={endDate}', tradeController.view)
// Export API routes
module.exports = router;
// Export API routes
module.exports = router;