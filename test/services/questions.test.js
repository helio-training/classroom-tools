import db from '../../src/config/db';
import Services from '../../src/services';

describe('Question Service', () => {
  
  beforeEach(() => {
    return db.get('questions').drop();
  });
  
  let service;
  beforeEach(() => {
    service = new Services.question(db);
    expect(service).to.be.ok;
    expect(service.collection).to.be.ok;
  });
  
  describe('#create()', () => {
    
    it('saves a question', () => {
      const question = {
        body: "Which is better Angular 2 or Angular 1?",
        votes: 0,
        isActive: true
      };
      
      return service.create(question)
        .then(result => {
          expect(question.body).to.equal(result.body);
        });
    });
    
  });
  
  describe('#byId(id)', () => {
    
    it(`retrieves a question by it's id`, () => {
      const question = {
        body: "Which is better Angular 2 or Angular 1?",
        votes: 0,
        isActive: true
      };
      
      return service.create(question)
        .then(result => {
          return service.byId(result._id)
            .then(insertedQuestion => {
              expect(result).to.equal(insertedQuestion);
            });
        });
    });
    
  });
  
});
