var express = require('express');
const HMfull = require("hmfull");

const { url } = HMfull.HMtai.nsfw.ahegao()

var router = express.Router()
router.get('/', async (req, res, next) => {
  res.status(200).send({
    url : url
  });
}) 
module.exports = router;