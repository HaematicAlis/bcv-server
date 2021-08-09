import express from 'express';

import { getComics, addComic, deleteComic, setDone, setComicDone } from '../controllers/comic.js';

const comicRouter = express.Router();

comicRouter.post('/get', getComics);
comicRouter.post('/add', addComic);
comicRouter.post('/delete', deleteComic);
comicRouter.post('/setDone', setDone);
comicRouter.post('/setComicDone', setComicDone);

export default comicRouter;