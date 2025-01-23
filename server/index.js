const express = require("express");
const winston = require("winston");
const utils = require("./utils");

const PORT = 8080;
const app = express();

// Configure logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
  ),
  transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "app.log" })
  ]
});

app.get("/romannumeral", (req, res) => {
  logger.info("romannumeral api called!");
  try {
    const number = req.query.query
    if (!number || isNaN(number) || Number(number) <= 0 || Number(number) > 3999) {
      // Return 400 (Bad Request) error if query is not a number between 1-3999.
      logger.info("Invalid input");
      res.status(400).json({error: "bad request, query must be a number from 1-3999"})
    } else {
      // Return converted roman number with valid query.
      res.status(200).json({ 
        input: number,
        output: utils.getRomanFromNumber(number)
       });
    };
  } catch(error) {
    // Handle the error
    logger.error(error);
    res.status(500).send('Internal Server Error');
  };

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;