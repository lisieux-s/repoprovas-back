import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';

import './setup.js'
import router from './routers/index.js';

const app = express();
app.use(cors());
app.use(json());
app.use(router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});