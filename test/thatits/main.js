
const express = require('express');
const bodyParser = require('body-parser');

// Bring in routes
const someRoutes = require('./routes/api/someRoutes');

// Init app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use('/api/someRoutes', someRoutes);

// Configure port
const port = process.env.PORT || 5000;

// Start express server
function startExpress() {
  app.listen(port);
  console.log('Express server listening on port '+ port);
}

startExpress();
        