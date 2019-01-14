"use strict";

var _express = _interopRequireDefault(require("express"));

var _meetup = _interopRequireDefault(require("./server/controllers/meetup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import bodyParser from 'body-parser';
// import meetupRoutes from './api/routes/meetups';
// Set up the express app
var app = (0, _express.default)();
app.use(_express.default.json()); // Parse incoming request data
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use('/api/v1/meetups', meetupRoutes);

app.post('/api/v1/meetups', _meetup.default.create);
app.get('/api/v1/meetups', _meetup.default.getAll);
app.get('/api/v1/meetups/:id', _meetup.default.getOne);
app.put('/api/v1/meetups/:id', _meetup.default.update);
app.delete('/api/v1/meetups/:id', _meetup.default.delete); // Set up listening port

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Server is running on port: ".concat(port));