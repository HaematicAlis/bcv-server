import express from 'express';

import { getVocab, getAllVocab, addVocab, deleteVocab } from '../controllers/vocab.js';

const vocabRouter = express.Router();

vocabRouter.post('/get', getVocab);
vocabRouter.post('/getall', getAllVocab);
vocabRouter.post('/add', addVocab);
vocabRouter.post('/delete', deleteVocab);

export default vocabRouter;