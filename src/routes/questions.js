import { Router } from 'express';
import Services from '../services';


const router = new Router();


router.get('/', (req, res) => {
  return Services.question.all()
    .then(questions => {
      return res.json(questions);
    })
    .catch(err => {
      return res.json(err);
    });
});


export default router;

