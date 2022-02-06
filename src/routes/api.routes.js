var express = require("express");
var router = express.Router();
var utilsTimeZone = require("../utils/utilTimeZone");
var validatorTimeZone = require("../validator/validatorTimeZone");


router.post("/transform_time", function (req, res) {
  if (validatorTimeZone.inputTransformTimeValidate(req)) {
    var time = req.body.time.split(":");
    var zone = req.body.timezone.split(":");
    var date = new Date();
    date.setUTCHours(time[0], time[1], time[2], 0);
    const timeConverted = utilsTimeZone.changeByTimeZone(
      date,
      parseInt(zone[0]),
      zone.length > 1 ? parseInt(zone[1]) : 0
    );
    const response = {
      time:
        timeConverted.getHours() +
        ":" +
        timeConverted.getMinutes() +
        ":" +
        timeConverted.getSeconds(),
      timezone: "utc",
    };
    res.send({ response });
  }
});

module.exports = router;
