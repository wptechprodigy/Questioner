// import bodyParser from 'body-parser';
import express from 'express';
import Meetup from './server/controllers/Meetup';

// import meetupRoutes from './api/routes/meetups';

// Set up the express app
const app = express();

app.use(express.json());
// Parse incoming request data
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use('/api/v1/meetups', meetupRoutes);

app.post('/api/v1/meetups', Meetup.create);
app.get('/api/v1/meetups', Meetup.getAll);
app.get('/api/v1/meetups/:id', Meetup.getOne);
app.put('/api/v1/meetups/:id', Meetup.update);
app.delete('/api/v1/meetups/:id', Meetup.delete);

// Set up listening port
const port = process.env.PORT || 5000;

app.listen(port)

console.log(`Server is running on port: ${port}`);