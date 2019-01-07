import bodyParser from 'body-parser';
import express from 'express';

// Bringing in 
import meetupRoutes from './api/routes/meetups';
import questionRoutes from './api/routes/questions';

// Set up the express app
const app = express();

// Parse incoming request data
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handling CORS errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, PATCH, POST, PUT');
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle request
app.use('/api/v1/meetups', meetupRoutes);
app.use('/api/v1/questions', questionRoutes);

// Error handling
app.use((req, res, next) => {
  const error = new Error('The requested resource is not available!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    error: {
      message: error.message,
    }
  });
});
  
// Set up listening port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
