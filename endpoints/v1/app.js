import bodyParser from 'body-parser';
import express from 'express';

import meetupRoutes from './api/routes/meetups';

// Set up the express app
const app = express();

// Parse incoming request data
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/api/v1/meetups', meetupRoutes);
  
// Set up listening port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
