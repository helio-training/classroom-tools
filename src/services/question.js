const COLLECTION = 'questions';

export default class {
  
  constructor(db) {
    // Setting a shortcut for db.questions
    this.collection = db.get(COLLECTION);
  }
  
  /**
   * Returns all the questions
   *
   * @returns {Promise<[]>}
   */
  all() {
    return this.collection.find({});
  }
  
  /**
   * Finds a question by it's _id
   * @param {ObjectID|String} id
   *
   * @returns {Promise<{}>}
   */
  byId(id) {
    return this.collection.findOne({ _id: id });
  }
  
  /**
   * Creates a new question
   * @param {Object} question
   * @returns {Promise<{}>}
   */
  create(question = {}) {
    return this.collection.insert(question);
  }
  
  /**
   * Updates a question by its id
   * @param {ObjectId|String} id
   * @param {Object} question
   * @returns {Promise<{}>}
   */
  update(id, question = {}) {
    return this.collection.update({ _id: id }, question);
  }
  
  /**
   * Removes a question by its id
   * @param {ObjectId|String} id
   * @returns {Promise<{}>}
   */
  remove(id) {
    return this.collection.remove({ _id: id }, true);
  }
};
