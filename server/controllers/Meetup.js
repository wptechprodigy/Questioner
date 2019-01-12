import MeetupModel from '../models/Meetup';

const Meetup = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object 
   */
  create(req, res) {
    if (!req.body.topic && !req.body.location && !req.body.happeningOn) {
      return res.status(400).json({
        status: '400',
        error: 'All fields are required',
      })
    }
    const meetup = MeetupModel.create(req.body);
    return res.status(201).json({
      status: '201',
      data: meetup,
    });
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} meetups array
   */
  getAll(req, res) {
    const meetups = MeetupModel.findAll();
    return res.status(200).json({
      status: '200',
      data: meetups,
    });
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object
   */
  getOne(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).json({
        status: '404',
        error: 'meetup not found',
      });
    }
    return res.status(200).json({
      status: '200',
      data: meetup,
    });
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated meetup
   */
  update(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).json({
        status: '404',
        error: 'meetup not found',
      });
    }
    const updatedMeetup = MeetupModel.update(req.params.id, req.body)
    return res.status(200).json({
      status: '200',
      data: updatedMeetup,
    });
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({
        status: '404',
        error: 'meetup not found',
      });
    }
    const meet = MeetupModel.delete(req.params.id);
    return res.status(204).json({
      status: '204',
      data: meet,
    });
  }
};

export default Meetup;