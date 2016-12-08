import Mongo from 'mongojs';
import Monk from 'monk';



const MONGO_URI = process.env.MONGODB_URI || 'classroom-tools';

const db = Monk(MONGO_URI);

//const db = Mongo(MONGO_URI, ['questions']);

export default db;
