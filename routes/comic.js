import express from 'express';

import { getComics, addComic, deleteComic, addImage } from '../controllers/comic.js';

const comicRouter = express.Router();

comicRouter.post('/get', getComics);
comicRouter.post('/add', addComic);
comicRouter.post('/addImage', addImage);
comicRouter.post('/delete', deleteComic);

export default comicRouter;