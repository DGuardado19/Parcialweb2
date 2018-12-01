var express = require('express');
var router = express.Router();
const userController= require('../controllers/userControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', userController.index);
router.get('/:id', userController.findUser);
//router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete)

module.exports = router;
