import express from 'express';

import { getVocab, addVocab, deleteVocab } from '../controllers/vocab.js';

const vocabRouter = express.Router();

vocabRouter.post('/get', getVocab);
vocabRouter.post('/add', addVocab);
vocabRouter.post('/delete', deleteVocab);

export default vocabRouter;