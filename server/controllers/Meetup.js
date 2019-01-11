import MeetupModel from '../models/Meetup';

const Meetup = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object 
   */
  create(req, res) {
    if (!req.body.topic && !req.body.location && !req.body.happeningOn) {
      return res.status(400).send({
        message: 'All fields are required',
      })
    }
    const meetup = MeetupModel.create(req.body);
    return res.status(201).send(meetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const meetups = MeetupModel.findAll();
    return res.status(200).send(meetups);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({
        message: 'meetup not found',
      });
    }
    return res.status(200).send(meetup);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated reflection
   */
  update(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
      return res.status(404).send({
        message: 'meetup not found',
      });
    }
    const updatedMeetup = MeetupModel.update(req.params.id, req.body)
    return res.status(200).send(updatedMeetup);
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
        message: 'meetup not found',
      });
    }
    const ref = MeetupModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Meetup;