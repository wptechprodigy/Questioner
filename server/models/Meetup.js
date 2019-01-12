import moment from 'moment';
import uuid from 'uuid';

class Meetup {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.meetups = [];
  }

  /**
   * 
   * @returns {object} meetup object
   */
  create(data) {
    const newMeetup = {
      id: uuid.v4(),
      topic: data.topic || '',
      createdOn: moment.now(),
      location: data.location || '',
      description: data.description || '',
      happeningOn: moment.now(),
      tags: data.tags || '',
      modifiedOn: moment.now(),
    };

    this.meetups.push(newMeetup);
    return newMeetup
  }

  /**
   * 
   * @param {uuid} id
   * @returns {object} meetup object
   */
  findOne(id) {
    return this.meetups.find(meetup => meetup.id === id);
  }

  /**
   * @returns {object} returns all meetups
   */
  findAll() {
    return this.meetups;
  }

  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const meetup = this.findOne(id);
    const index = this.meetup.indexOf(meetup);
    this.meetups[index].topic = data['topic'] || meetup.topic;
    this.meetups[index].createdOn = moment.now();
    this.meetups[index].location = data['location'] || meetup.location;
    this.meetups[index].description = data['description'] || meetup.description;
    this.meetups[index].happeningOn = moment.now();
    this.meetups[index].tags = data['tags'] || meetup.tags;
    this.meetups[index].modifiedOn = moment.now();
    return this.meetups[index];
  }

  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const meetup = this.findOne(id);
    const index = this.meetups.indexOf(meetup);
    this.meetups.splice(index, 1);
    return {};
  }
}

export default new Meetup();