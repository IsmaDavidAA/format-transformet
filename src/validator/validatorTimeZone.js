validator = {
  inputTransformTimeValidate: (req) => {
    if (!req.body.time || !req.body.timezone) {
      res.status(400).send("Invalid input");
      return false;
    }
    return true;
  },
};
module.exports = validator;
