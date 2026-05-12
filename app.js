require('dotenv').config();

const express = require('express');
const app = express();

// controller
const stripeController = require("./controllers/stripe_controller")

// error handler
const notFoundMiddleware = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');

app.use(express.json());
app.use(express.static('./public'));

// stripe
app.post("/stripe", stripeController)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
