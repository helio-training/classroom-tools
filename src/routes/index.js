import QuestionsRoutes from './questions';

export default (app) => {
  app.use('/questions', QuestionsRoutes);
}
