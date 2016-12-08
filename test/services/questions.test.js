import db from '../../src/config/db';
import Services from '../../src/services';

describe('Question Service', () => {
  
  beforeEach(() => {
    if (db['questions']) {
      return db.questions.drop();
    }
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
      
      return service.create(question).then(() => {
        return service.all()
          .then(questions => {
            expect(questions).to.not.be.empty();
          });
      });
      
    });
    
  });
  
});
