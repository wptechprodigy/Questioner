import express from 'express';
import db from '../../db/db';

const router = express.Router();

// Get all meetups
router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'These are the available meetups!',
    meetups: db,
  });
});

// Create a new meetup
router.post('/', (req, res) => {
  if (!req.body.topic) {
    return res.status(400).json({
      status: 400,
      message: 'Meetup must have a topic!',
    });
  } 
  
  if (!req.body.location) {
    return res.status(400).json({
      status: 400,
      message: 'Location is required!',
    });
  }

  const meetup = {
    id: db.length + 1,
    topic: req.body.topic,
    location: req.body.location,
    happeningOn: req.body.happeningOn,
    tags: req.body.tags,
  }

  db.push(meetup);

  return res.status(201).json({
    status: 201,
    message: 'Meetup created successfully!',
    meetup,
  });
});

// Get a single meetup
router.get('/:meetupId', (req, res) => {
  if (req.params.meetupId !== 'upcoming') {
    const meetupId = parseInt(req.params.meetupId, 10);

    db.map((meetup) => {
      if (meetup.id === meetupId) {
        return res.status(200).json({
          status: 200,
          message: 'Meetup retrieved successfully!',
          meetup,
        });
      }
    });

    return res.status(404).json({
      status: 404,
      message: 'Meetup does not exist!',
    });
  } 
  
  const currentDate = new Date();
  const meetupDate = db.happeningOn;

  if (meetupDate > currentDate) {
    return res.status(200).json({
      status: 200,
      message: 'Upcoming meetups loaded successfully!',
    });
  }
  
});

// Delete a meetup
router.delete('/:meetupId', (req, res) => {
  const meetupId = parseInt(req.params.meetupId, 10);

  db.map((meetup, index) => {
    if (meetup.id === meetupId) {
      db.splice(index, 1);
      return res.status(200).json({
        status: 200,
        message: 'Meetup deleted succesfully!',
        meetup,
      });
    }
  });

  return res.status(404).json({
    status: 404,
    message: 'Meetup does not exist!',
  });
});

// Update a meetup
router.patch('/:meetupId', (req, res) => {
  const meetupId = parseInt(req.params.meetupId, 10);
  let meetupFound;
  let meetupIndex;
  db.map((meetup, index) => {
    if (meetup.id === meetupId) {
      meetupFound = meetup;
      meetupIndex = index;
    }
  });

  if (!meetupFound) {
    return res.status(404).json({
      status: 404,
      message: 'Meetup not found.',
    });
  }

  if (!req.body.topic) {
    return res.status(400).json({
      status: 400,
      message: 'Meetup must have a topic!',
    });
  } 
  
  if (!req.body.location) {
    return res.status(400).json({
      status: 400,
      message: 'Meetup should have a location!',
    });
  }

  const updatedMeetup = {
    id: meetupFound.id,
    topic: req.body.topic || meetupFound.topic,
    location: req.body.location || meetupFound.location,
  };

  db.splice(meetupIndex, 1, updatedMeetup);

  return res.status(201).send({
    status: 201,
    message: 'Meetup updated successfully!',
    updatedMeetup,
  });

});

export default router;
