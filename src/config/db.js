import Monk from 'monk';

const MONGO_URI = process.env.MONGODB_URI || 'classroom-tools';

const db = Monk(MONGO_URI);

export default db;
