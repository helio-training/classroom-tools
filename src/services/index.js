import db from '../config/db';
import User from './user';
import Question from './question';

export default {
  user: new User(db),
  question: new Question(db)
}
