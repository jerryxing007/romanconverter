const express = require("express");
const utils = require("./utils");

const PORT = 8080;
const app = express();

app.get("/romannumeral", (req, res) => {
  try {
    const number = req.query.query
    if (!number || isNaN(number) || Number(number) <= 0 || Number(number) > 3999) {
      // Return 400 (Bad Request) error if query is not a number between 1-3999.
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
    console.log(error);
    res.status(500).send('Internal Server Error');
  };

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;