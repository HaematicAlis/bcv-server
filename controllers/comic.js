import Comic from '../models/comic.js';

export const getComics = async (req, res) => {
    const id = req.body.id;
    const sort = req.body.sort;

    try {
        var comics = await Comic.find({ owner: id }).sort(sort);
        res.status(200).json(comics);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addComic = async (req, res) => {
    const comicInfo = req.body;
    const newComic = new Comic({ name: comicInfo.name, owner: comicInfo.owner, album: comicInfo.album, images: comicInfo.images });

    try {
        await newComic.save();
        res.status(201).json(newComic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const deleteComic = async (req, res) => {
    const id = req.body.id;
    
    try {
        await Comic.findByIdAndDelete(id);
        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const setComicDone = async (req, res) => {
    const id = req.body.id;
    const done = req.body.done;

    try {
        console.log('----------------------');
        console.log('id: ' + id + '   done: ' + done);
        console.log('finding comic...');
        const comic = await Comic.findById(id);
        console.log('found the comic:');
        console.log(comic.done);
        console.log('setting comic done to ' + done);
        comic.done = done;
        console.log('saving comic...');
        await comic.save();
        res.status(201).json(comic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const setDone = async (req, res) => {
    const id = req.body.id;
    const index = req.body.index;
    const done = req.body.done;

    try {
        const comic = await Comic.findById(id);
        comic.images[index].done = done;
        await comic.save();
        res.status(201).json(comic);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}