import moment from 'moment';
import uuid from 'uuid';

class Question {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.questions = [];
  }

  /**
   * 
   * @returns {object} meetup object
   */
  create(data) {
    const newQuestion = {
      id: uuid.v4(),
      createdOn: moment.now(),
      createdBy: data.createdBy || '',
      meetup: data.meetup || '',
      title: data.title || '',
      body: data.body || '',
      votes: data.votes || '',
    };

    this.questions.push(newQuestion);
    return newQuestion;
  }

  /**
   * 
   * @param {uuid} id
   * @returns {object} meetup object
   */
  findOne(id) {
    return this.questions.find(question => question.id === id);
  }

  /**
   * @returns {object} returns all reflections
   */
  findAll() {
    return this.questions;
  }

  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions[index].title = data['title'] || question.title;
    this.questions[index].body = data['body'] || question.body;
    this.questions[index].votes = data['votes'] || question.votes;
    return this.questions[index];
  }

  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const question = this.findOne(id);
    const index = this.questions.indexOf(question);
    this.questions.splice(index, 1);
    return {};
  }

}
export default new Question();