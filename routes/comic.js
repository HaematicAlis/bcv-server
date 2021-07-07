import express from 'express';

import { getComics, addComic, addImage } from '../controllers/comic.js';

const comicRouter = express.Router();

comicRouter.post('/get', getComics);
comicRouter.post('/add', addComic);
comicRouter.post('/addImage', addImage);

export default comicRouter;