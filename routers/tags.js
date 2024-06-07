const express = require('express');
const router = express.Router();
const {
  // store, //CREATE
  // index,
  show, //READ
  // update, //UPDATE
  // destroy, //DELETE
} = require('../controllers/tags.js');

// router.post('/', validator(bodyData), store);
// router.get('/', index);
// router.use('/:id', validator(paramID));
router.get('/:id', show);
// router.put('/:id', validator(bodyData), update);
// router.delete('/:id', destroy);

module.exports = router;
