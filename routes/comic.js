import express from 'express';

import { getComics, addComic } from '../controllers/comic.js';

const comicRouter = express.Router();

comicRouter.post('/get', getComics);
comicRouter.post('/add', addComic);

export default comicRouter;